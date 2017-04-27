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
#  guest_limit :integer          not null
#

class Spot < ActiveRecord::Base
  validates :lat, :lng, :owner, :price, :location, :image_url, :description, presence: true


  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northeast][:lat])
        .where("lat > ?", bounds[:southwest][:lat])
        .where("lng > ?", bounds[:southwest][:lng])
        .where("lng < ?", bounds[:northeast][:lng])
  end

  def self.can_fit_guests(guests)
    self.where("guest_limit >= ?", guests)
  end

  # def available_spots(start_date, end_date)
  #   available = Booking.where(spot_id: self.id)
  #     .where(<<-SQL, start_date: start_date, end_date: end_date)
  #        NOT( (start_date > :end_date) OR (end_date < :start_date) )
  #     SQL
  #   return available
  # end

  has_many :bookings

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
end
