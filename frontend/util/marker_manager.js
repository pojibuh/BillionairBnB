export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(spots) {
    let spotList = Object.values(spots);
    if (spotList.length > 0) {
      spotList.forEach((spot) => {
        this.createMarkerFromSpot(spot);
      });
    }
  }

  createMarkerFromSpot(spot) {
    let marker = new google.maps.Marker({
      position: {lat: spot.lat, lng: spot.lng},
      map: this.map,
      spotId: spot.id
    });
    this.markers[marker.spotId] = marker;
    marker.setMap(this.map);
  }
}
