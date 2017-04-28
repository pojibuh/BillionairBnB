class AddRulesToSpots < ActiveRecord::Migration
  def change
    add_column :spots, :rules, :string
  end
end
