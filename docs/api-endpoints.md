# API Endpoints

## HTML API

### Root
+ GET / - loads up application

## JSON API

### Users
+ POST /api/users - create new user
+ PATCH /api/users - update user
+ GET /api/users - fetch user details

### Session
+ POST /api/session - Log In
+ DELETE /api/session - Log Out

### Spots
+ GET /api/spots - Listings search
+ POST /api/spots - host can create a spot
+ GET /api/spots/:id - leads to show page
+ PATCH /api/spots
+ DELETE /api/spots

### Bookings
+ GET /api/bookings - fetch all bookings
+ POST /api/bookings - create a booking
+ GET /api/bookings/:id - fetch one bookings
+ DELETE /api/bookings - cancel booking

### Reviews
+ POST api/bookings/bookingsId/reviews/:id - create review
