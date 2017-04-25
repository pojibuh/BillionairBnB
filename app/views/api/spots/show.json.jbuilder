json.extract! @spot, :id, :lat, :lng, :owner, :price, :location, :description
json.image_url asset_path(@spot.image_url)
