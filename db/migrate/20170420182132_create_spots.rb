class CreateSpots < ActiveRecord::Migration
  def change
    create_table :spots do |t|
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :owner_id, null: false
      t.integer :price, null: false
      t.string :location, null: false
      t.string :image_url, null: false
      t.text :description, null: false

      t.timestamps null: false
    end

    add_index :spots, :owner_id
    add_index :spots, :price
    add_index :spots, :image_url
  end
end
