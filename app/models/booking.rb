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

  def overlap?(start_date, end_date)

  end

  belongs_to :user

  belongs_to :spot
end
