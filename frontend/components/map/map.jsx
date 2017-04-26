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
    let mapCoords;
    if (this.props.bounds && typeof this.props.bounds.northeast.lat === 'number') {
      //refactor 19-25 into its own function
      let north = this.props.bounds.northeast.lat;
      let east = this.props.bounds.northeast.lng;
      let south = this.props.bounds.southwest.lat;
      let west = this.props.bounds.southwest.lng;

      let lat = (north + south) / 2;
      let lng = (east + west) / 2;

      mapCoords = { center: {lat: lat, lng: lng }, zoom: 10};
    } else {
      mapCoords = mapOptions;
    }
    this.map = new google.maps.Map(this.mapNode, mapCoords);

    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.registerEventListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentWillReceiveProps(newprops) {
    if (this.props.bounds && newprops.bounds) {
      if (newprops.bounds.northeast.lat && this.props.bounds.northeast.lat) {
        let difference = function (a, b) { return Math.abs(a - b); };
        if (this.map.getZoom() > 8 && difference(newprops.bounds.northeast.lat, this.props.bounds.northeast.lat) > 1) {
          //refactor into own function
          let north = newprops.bounds.northeast.lat;
          let east = newprops.bounds.northeast.lng;
          let south = newprops.bounds.southwest.lat;
          let west = newprops.bounds.southwest.lng;

          let lat = (north + south) / 2;
          let lng = (east + west) / 2;
          this.map.setCenter({lat: lat, lng: lng});
          this.map.setZoom(10);
        }
      }
    }
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
    this.props.router.push(`spots/${spots.id}`);
  }

  render() {
    return(
      <div id="map-container" ref={ map => this.mapNode = map }/>
    );
  }
}

export default withRouter(Map);
