# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# demo_user = User.create(email: 'moktar@jama.com', fname: 'Moktar', lname: 'Jama', password: 'password')
# demo_user_2 = User.create(email: 'joktar@mama.com', fname: 'Joktar', lname: 'Mama', password: 'dassworp')

new_york = Spot.create(
  description: 'Amazing TriBeCa penthouse',
  image_url: 'https://www.thepinnaclelist.com/wp-content/uploads/2014/10/01-48.0-Million-Sky-Lofts-Glasshouse-Penthouse-145-Hudson-Street-New-York-NY-920x700.jpg',
  price: 800,
  location: 'New York City, NY, USA',
  owner_id: 1,
  lat: 40.721695,
  lng: -74.011635,
  guest_limit: 5,
  rules: Faker::StarWars.quote
)

los_angeles = Spot.create(
  description: 'Great mansion in Bel-Air',
  image_url: 'https://s-media-cache-ak0.pinimg.com/originals/35/16/65/351665403bad01e7215aca7c2c6d67af.png',
  price: 1000,
  location: 'Los Angeles, CA, USA',
  owner_id: 1,
  lat: 34.099428,
  lng: -118.461763,
  guest_limit: 10,
  rules: "Your name can't be DJ Jazzy Jeff"
)

london = Spot.create(
  description: 'Absolutely regal palace',
  image_url: 'https://www.royal.uk/sites/default/files/images/feature/buckingham-palace.jpg',
  price: 1000,
  location: 'London, England, UK',
  owner_id: 1,
  lat: 51.501344,
  lng: 0.141890,
  guest_limit: 2,
  rules: Faker::Hipster.sentence
)

kanazawa = Spot.create(
  description: 'Historic and gorgeous castle',
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Kanazawa-M-5935.jpg',
  price: 800,
  location: 'Kanazawa, Ishikawa, Japan',
  owner_id: 1,
  lat: 36.563950,
  lng: 136.659507,
  guest_limit: 40,
  rules: Faker::ChuckNorris.fact
)

dubai = Spot.create(
  description: 'man-made island for you and your friends to enjoy',
  image_url: 'https://ak3.picdn.net/shutterstock/videos/3730241/thumb/1.jpg?i10c=img.resize(height:72)',
  price: 800,
  location: 'Dubai, UAE',
  owner_id: 1,
  lat: 25.112953,
  lng: 55.138778,
  guest_limit: 30,
  rules: Faker::StarWars.quote
)

santorini = Spot.create(
  description: 'seashore villa with an amazing view',
  image_url: 'https://t-ec.bstatic.com/images/hotel/max1024x768/731/73116664.jpg',
  price: 700,
  location: 'Santorini, Greece',
  owner_id: 1,
  lat: 36.475422,
  lng: 25.413763,
  guest_limit: 7,
  rules: Faker::StarWars.quote
)

singapore = Spot.create(
  description: 'modern penthouse in a thriving Singaporean district',
  image_url: 'https://sg1-cdn.pgimgs.com/listing/18888255/UPHO.53580206.V800/New-Penthouse-Jurong-Amazing-Water-Views%21-Boon-Lay-Jurong-Tuas-Singapore.jpg',
  price: 800,
  location: 'Singapore, Singapore',
  owner_id: 1,
  lat: 1.305224,
  lng: 103.913765,
  guest_limit: 4,
  rules: Faker::ChuckNorris.fact
)

san_francisco = Spot.create(
  description: 'excellent getaway for tech billionaires',
  image_url: 'https://ap.rdcpix.com/1771840340/12a1ef9c744719a43a4890b2aee25f0fl-m0xd-w480_h480_q80.jpg',
  price: 1000,
  location: 'San Francisco, CA, USA',
  owner_id: 1,
  lat: 37.788497,
  lng: -122.457513,
  guest_limit: 11,
  rules: Faker::Hipster.sentence
)

hong_kong = Spot.create(
  description: 'an amazing getaway from the bustling metropolis',
  image_url: 'https://www.engelvoelkers.com/wp-content/uploads/2014/11/Capture.png',
  price: 1200,
  location: 'Hong Kong',
  owner_id: 1,
  lat: 22.246116,
  lng: 114.185732,
  guest_limit: 20,
  rules: Faker::StarWars.quote
)

paris = Spot.create(
  description: 'gorgeous apartment right on the Champs-Elysees',
  image_url: 'https://s-ec.bstatic.com/images/hotel/max1024x768/258/25889444.jpg',
  price: 800,
  location: 'Paris, France',
  owner_id: 1,
  lat: 48.870086,
  lng: 2.306588,
  guest_limit: 6,
  rules: Faker::StarWars.quote
)

miami = Spot.create(
  description: 'wonderful place right by the beach',
  image_url: 'https://cdn1.vox-cdn.com/uploads/chorus_asset/file/6569739/20160505_01_DSC_1862_HDR_LR.JPG',
  price: 1100,
  location: 'Miami, Florida, USA',
  owner_id: 1,
  lat: 25.785435,
  lng: -80.131368,
  guest_limit: 8,
  rules: Faker::ChuckNorris.fact
)

barcelona = Spot.create(
  description: 'gorgeous home located near the Sagrada Familia',
  image_url: 'https://69b0d6debb47579c9a280043-costadeltennis.netdna-ssl.com/wp-content/uploads/2017/04/playafels-barcelona-hotel6.jpg',
  price: 800,
  location: 'Barcelona, Spain',
  owner_id: 1,
  lat: 41.377032,
  lng: 2.188995,
  guest_limit: 10,
  rules: Faker::Hipster.sentence
)

milan = Spot.create(
  description: 'gorgeous house in the wealthiest Milanese district',
  image_url: 'https://www.milanmuseumguide.com/wp-content/uploads/Villa-Necchi-Campiglio-Milan-624x414.jpg',
  price: 1000,
  location: 'Milan, Italy',
  owner_id: 1,
  lat: 45.361689,
  lng: 9.162319,
  guest_limit: 6,
  rules: Faker::StarWars.quote
)

vienna = Spot.create(
  description: 'apartment centrally located in Innere Stadt, Vienna',
  image_url: 'https://aff.bstatic.com/images/hotel/840x460/137/13767864.jpg',
  price: 900,
  location: 'Vienna, Austria',
  owner_id: 1,
  lat: 48.210068,
  lng: 16.378979,
  guest_limit: 4,
  rules: Faker::ChuckNorris.fact
)

rio = Spot.create(
  description: 'wonderful beachside Leblon apartment',
  image_url: 'https://www.e-architect.co.uk/images/jpgs/sao_paulo/casa_6_m160310_1.jpg',
  price: 1300,
  location: 'Rio de Janeiro, Brazil',
  owner_id: 1,
  lat: -22.985907,
  lng: -43.224665,
  guest_limit: 15,
  rules: Faker::Hipster.sentence
)

cape_town = Spot.create(
  description: 'amazing place in the suburbs of Cape Town',
  image_url: 'https://businesstech.co.za/news/wp-content/uploads/2015/10/R200-million-house.png',
  price: 1100,
  location: 'Cape Town, South Africa',
  owner_id: 1,
  lat: -34.032869,
  lng: 18.474536,
  guest_limit: 10,
  rules: Faker::StarWars.quote
)
