# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170420182132) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "spots", force: :cascade do |t|
    t.float    "lat",         null: false
    t.float    "lng",         null: false
    t.integer  "owner_id",    null: false
    t.integer  "price",       null: false
    t.string   "location",    null: false
    t.string   "image_url",   null: false
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "spots", ["image_url"], name: "index_spots_on_image_url", using: :btree
  add_index "spots", ["owner_id"], name: "index_spots_on_owner_id", using: :btree
  add_index "spots", ["price"], name: "index_spots_on_price", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "fname",           null: false
    t.string   "lname",           null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end
