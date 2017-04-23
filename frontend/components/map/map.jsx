import React from 'react';
import MarkerManager from '../../util/marker_manager';

let mapOptions = {
  center: {lat: 6.088792, lng: -38.568958},
  zoom: 2
};

const getCoordinates = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class Map extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  render() {
    return(
      <div id="map-container" ref={ map => this.mapNode = map }/>
    );
  }
}

export default Map;
