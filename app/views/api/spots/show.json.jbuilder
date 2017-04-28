json.extract! @spot, :id, :lat, :lng, :owner, :price, :location, :rules, :description
json.image_url asset_path(@spot.image_url)
