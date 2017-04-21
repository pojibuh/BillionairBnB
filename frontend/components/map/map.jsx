import React from 'react';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: {lat: 40.757433, lng: -73.985807},
      zoom: 12
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return(
      <div id="map-container" ref={ map => this.mapNode = map }/>
    );
  }
}

export default Map;
