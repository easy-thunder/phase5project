class DropMainImage < ActiveRecord::Migration[7.0]
  def change

    drop_table :main_images
  end
end
