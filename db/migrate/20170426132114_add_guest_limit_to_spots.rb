class AddGuestLimitToSpots < ActiveRecord::Migration
  def change
    add_column :spots, :guest_limit, :integer
  end
end
