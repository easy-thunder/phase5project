class AddColumnsToUserServices < ActiveRecord::Migration[7.0]
  def change
    add_column :user_services, :name, :string
    add_column :user_services, :initial_price, :float, default: 0
    add_column :user_services, :recurring_fee, :boolean
    add_column :user_services, :recurring_price, :float, default: 0
    add_column :user_services, :subsequent_price, :float, default: 0
    add_column :user_services, :description, :text
    add_column :user_services, :details, :text
  end
end
