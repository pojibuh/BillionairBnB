@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :description, :lat, :lng, :location, :price
  end
end
