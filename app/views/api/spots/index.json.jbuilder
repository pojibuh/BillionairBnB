@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :description, :lat, :lng, :location, :price
    json.image_url asset_path(spot.image_url)
  end
end
