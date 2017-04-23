# == Schema Information
#
# Table name: spots
#
#  id          :integer          not null, primary key
#  lat         :float            not null
#  lng         :float            not null
#  owner_id    :integer          not null
#  price       :integer          not null
#  location    :string           not null
#  image_url   :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Spot < ActiveRecord::Base
  validates :lat, :lng, :owner, :price, :location, :image_url, :description, presence: true

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
end
