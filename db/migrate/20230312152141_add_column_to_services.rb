class AddColumnToServices < ActiveRecord::Migration[7.0]
  def change
    add_column :services, :subsequent_price, :float, defalut: 0
    add_column :services, :description, :text
  end
end
