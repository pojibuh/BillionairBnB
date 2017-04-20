# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

demo_user = User.create(email: 'moktar@jama.com', fname: 'Moktar', lname: 'Jama', password: 'password')

new_york = Spot.new(
  description: 'Amazing TriBeCa penthouse',
  image_url: 'https://www.thepinnaclelist.com/wp-content/uploads/2014/10/01-48.0-Million-Sky-Lofts-Glasshouse-Penthouse-145-Hudson-Street-New-York-NY-920x700.jpg',
  price: 2
)
