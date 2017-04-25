export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  updateMarkers(spots) {
    const spotsObj = {};
    let spotList = Object.values(spots);

    if (spotList.length > 0) {
      spotList.forEach((spot) => {
        spotsObj[spot.id] = spot;
      });

      spotList = spotList.filter(spot => !this.markers[spot.id]);
      spotList.forEach((spot) => {
        this.createMarkerFromSpot(spot, this.handleClick);
      });

      Object.keys(this.markers)
      .filter(spotId => !spotsObj[spotId])
      .forEach((spotId) => this.removeMarker(this.markers[spotId]));
    }
  }

  createMarkerFromSpot(spot) {
    let marker = new google.maps.Marker({
      position: {lat: spot.lat, lng: spot.lng},
      map: this.map,
      spotId: spot.id
    });
    this.markers[marker.spotId] = marker;

    marker.addListener('click', () => this.handleClick(spot));
    this.markers[marker.spotId] = marker;

    marker.setMap(this.map);
  }

  removeMarker(marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }
}
