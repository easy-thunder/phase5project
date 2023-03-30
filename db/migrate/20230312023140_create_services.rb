class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :name
      t.float :initial_price, default: 0
      t.boolean :recurring_fee, default: false
      t.float :recurring_price, default: 0

      t.timestamps
    end
  end
end
