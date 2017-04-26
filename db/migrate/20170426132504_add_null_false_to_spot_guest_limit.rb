class AddNullFalseToSpotGuestLimit < ActiveRecord::Migration
  def change
    change_column :spots, :guest_limit, :integer, null: false
  end
end
