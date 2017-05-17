import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let mapOptions = {
      center: {lat: 40.757433, lng: -73.985807},
      zoom: 10
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);

    if (typeof this.props.bounds.northeast.lat === 'number') {
      let latLngBounds = new google.maps.LatLngBounds(new google.maps.LatLng({lat: this.props.bounds.southwest.lat, lng: this.props.bounds.southwest.lng }),
      new google.maps.LatLng({lat: this.props.bounds.northeast.lat, lng: this.props.bounds.northeast.lng }));
      this.map.fitBounds(latLngBounds);
    }
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.registerEventListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentWillReceiveProps(newprops) {
    if (newprops.address && newprops.address !== this.props.address) {
      let latLngBounds = new google.maps.LatLngBounds(new google.maps.LatLng({lat: newprops.bounds.southwest.lat, lng: newprops.bounds.southwest.lng }),
      new google.maps.LatLng({lat: newprops.bounds.northeast.lat, lng: newprops.bounds.northeast.lng }));

      this.map.fitBounds(latLngBounds);
    }

    let zoom = this.map.getZoom();
  }

  registerEventListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northeast: { lat: north, lng: east },
        southwest: { lat: south, lng: west } };

      if (!isNaN(bounds.northeast.lat)) {
        this.props.updateFilter([['bounds', bounds]]);
      }
    });
  }

  handleMarkerClick(spots) {
    this.props.router.push(`/spots/${spots.id}`);
  }

  render() {
    return(
      <div id="map-container" ref={ map => this.mapNode = map }/>
    );
  }
}

export default withRouter(Map);
