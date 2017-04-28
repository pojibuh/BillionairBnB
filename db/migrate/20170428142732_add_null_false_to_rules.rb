class AddNullFalseToRules < ActiveRecord::Migration
  def change
    change_column :spots, :rules, :string, null: false
  end
end
