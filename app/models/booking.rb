# == Schema Information
#
# Table name: bookings
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  spot_id      :integer          not null
#  start_date   :date             not null
#  end_date     :date             not null
#  guest_number :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Booking < ActiveRecord::Base
  validates :user, :spot, :start_date, :end_date, :guest_number, presence: true

  def self.overlap?(start_date, end_date, spot_id)
    debugger
    spot_bookings = Spot.find_by(id: spot_id).bookings
    debugger
    spot_bookings.none? do |booking|
      (booking.start_date <=> start_date) == -1 || (end_date <=> booking.start_date) == -1
    end
  end

  def self.date_convert(date)
    date_numbers = date.split(',').map(&:to_i)

    return Date.new(date_numbers[0], date_numbers[1], date_numbers[2])
  end

  belongs_to :user

  belongs_to :spot
end
