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

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
