class AddPriceToUserServices < ActiveRecord::Migration[7.0]
  def change
    add_column :user_services, :price, :float, default: 0
    add_column :user_services, :monthly, :float, default: 0
  end
end
