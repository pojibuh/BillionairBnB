# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  spot_id    :integer          not null
#  rating     :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ActiveRecord::Base
  validates :spot, :author, :rating, :body, presence: true

  def self.find_reviews(spot_id)
    Review.where(spot_id: spot_id)
  end

  belongs_to :spot

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
end
