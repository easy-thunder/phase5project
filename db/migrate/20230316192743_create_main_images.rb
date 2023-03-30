class CreateMainImages < ActiveRecord::Migration[7.0]
  def change
    create_table :main_images do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.text :main_image_use
      t.text :image

      t.timestamps
    end
  end
end
