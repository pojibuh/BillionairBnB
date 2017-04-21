# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

demo_user = User.create(email: 'moktar@jama.com', fname: 'Moktar', lname: 'Jama', password: 'password')

new_york = Spot.create(
  description: 'Amazing TriBeCa penthouse',
  image_url: 'https://www.thepinnaclelist.com/wp-content/uploads/2014/10/01-48.0-Million-Sky-Lofts-Glasshouse-Penthouse-145-Hudson-Street-New-York-NY-920x700.jpg',
  price: 800,
  location: 'New York City',
  owner_id: 1,
  lat: 20.1,
  lng: 20.1
)

los_angeles = Spot.create(
  description: 'Great mansion in Bel-Air',
  image_url: 'https://s-media-cache-ak0.pinimg.com/originals/35/16/65/351665403bad01e7215aca7c2c6d67af.png',
  price: 1000,
  location: 'Los Angeles',
  owner_id: 1,
  lat: 20.1,
  lng: 20.1
)

london = Spot.create(
  description: 'Absolutely regal palace',
  image_url: 'https://www.royal.uk/sites/default/files/images/feature/buckingham-palace.jpg',
  price: 1000,
  location: 'London',
  owner_id: 1,
  lat: 20.1,
  lng: 20.1
)

kanazawa = Spot.create(
  description: 'Historic and gorgeous castle',
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Kanazawa-M-5935.jpg',
  price: 800,
  location: 'Kanazawa',
  owner_id: 1,
  lat: 20.1,
  lng: 20.1
)

dubai = Spot.create(
  description: 'man-made island for you and your friends to enjoy',
  image_url: 'http://www.factsinside.com/wp-content/uploads/2015/05/dubai_nakhell.jpg',
  price: 800,
  location: 'Dubai',
  owner_id: 1,
  lat: 20.1,
  lng: 20.1
)
