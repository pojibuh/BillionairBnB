import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

let mapOptions = {
  center: {lat: 6.088792, lng: -38.568958},
  zoom: 2
};

class Map extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.registerEventListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentWillReceiveProps(newprops) {
    
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  registerEventListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southwest: { lat: south, lng: west } };
      this.props.updateBounds(bounds);
    });
  }

  render() {
    return(
      <div id="map-container" ref={ map => this.mapNode = map }/>
    );
  }
}

export default Map;
