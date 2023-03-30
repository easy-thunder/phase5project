class AddPriceToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :price, :float
  end
end
