export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    console.log('time to update');
    benches.forEach((spot) => {
      createMarkerFromSpot(spot);
    });
  }

  createMarkerFromBench(spot) {
    let marker = new google.maps.Marker({
      position: {lat: spot.lat, lng: spot.lng},
      map: this.map,
      title: 'Bench Marker'
    });
    this.markers[spot.id] = marker;
    marker.setMap(this.map);
  }
}
