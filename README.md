== BillionairBnB

Link to live site: [BillionairBnB](billionairbnb.herokuapp.com)

BillionairBnB is an application that allows its users to stay at luxury homes around the world. It is inspired by Airbnb, and was built using a Ruby on Rails backend, the React/Redux framework on the frontend, and a PostgreSQL database.

## Features & Implementation

### Spot Search Utilizing Google Maps API

BillionairBnB has search functionality that gives users the ability to search for homes based on where in the world they want to visit. When they input a place, an API request is sent to the Google Geocoder API, which responds with coordinates that the map can use to render the correct area. From there, the database filter spots based on which ones are within the bounds of the map. Since this filter also works when users move the map themselves, its dynamism enhances the user experience greatly.

### Bookings

When a user wants to book a spot to stay in, they use the dynamic React Dates calendar, which is a library maintained by Airbnb. After inputting the start and end dates of their stay, there is a database check that makes sure that there are no conflicting bookings. If there is any conflict, an error is raised, and the user knows to modify the dates of their stay.

## Future Features to be Added

### User/Host Profiles

Allow users to create profiles and customize settings, such as location and profile picture

### Spot Creation

Allow users to become host by placing their own spot on the site that others can book

### Messaging

Facilitate communication between user and host through the site
