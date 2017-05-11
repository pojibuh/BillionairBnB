# BillionairBnB

Link to live site: [BillionairBnB](http://billionairbnb.us)

BillionairBnB is an application that allows its users to stay at luxury homes around the world. It is inspired by Airbnb, and was built using a Ruby on Rails backend, the React/Redux framework on the frontend, and a PostgreSQL database.

![alt text](/app/assets/images/mainpage.png)

## Features & Implementation

### Spot Search Utilizing Google Maps API

BillionairBnB has search functionality that gives users the ability to search for homes based on where in the world they want to visit. When they input a place, an API request is sent to the Google Geocoder API, which responds with coordinates that the map can use to render the correct area. From there, the database filters spots based on which ones are within the bounds of the map. Since this filter also works when users move the map themselves, its dynamism enhances the user experience greatly.

![alt text](/app/assets/images/searchpage.png)

```JavaScript
class Map extends React.Component {
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
}
```

### Bookings

When a user wants to book a spot to stay in, they use the dynamic React Dates calendar, which is a library maintained by Airbnb. After inputting the start and end dates of their stay, there is a database check that makes sure that there are no conflicting bookings. If there is any conflict, an error is raised, and the user knows to modify the dates of their stay.

```Ruby
class Booking < ActiveRecord::Base
  def self.no_overlap?(book_start_date, book_end_date, spot_id)
    spot_bookings = Spot.find_by(id: spot_id).bookings
    spot_bookings.none? do |booking|
      !((booking.start_date > book_end_date) || (book_start_date > booking.end_date))
    end
  end
end
```

## Future Features to be Added

### User/Host Profiles

Allow users to create profiles and customize settings, such as location and profile picture

### Spot Creation

Allow users to become host by placing their own spot on the site that others can book

### Messaging

Facilitate communication between user and host through the site
