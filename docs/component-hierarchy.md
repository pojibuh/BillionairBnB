# Component Hierarchy

### HeaderContainer
+ HeaderLoggedIn
+ HeaderLoggedOut
  + LogInModal
    + LogInContainer
      + AuthForm

  + SignUpModal
    + SignUpContainer
      + AuthForm

### HomeContainer
+ SearchBarContainer
  + SearchBar
+ FeaturedHomesContainer
  + FeaturedHomes
    + HomeItem

### SearchContainer
+ MapContainer
+ HomesContainer
+ PriceRangeContainer
  + PriceRanges
+ SearchBarContainer
  + SearchBar

### SpotContainer
+ ReviewContainer
  + Review
+ SpotDetailContainer
  + SpotDetails
+ BookingsContainer
+ MapContainer

### BookingsContainer
+ CheckInContainer
  + CheckInDate
+ CheckOutContainer
  + CheckOutDate

# Routes

  path          | component
--------------- |-----------
'/'             | "HeaderContainer"
'/home'         | "HomeContainer"
'/spots/:spotId'| "SpotContainer"
