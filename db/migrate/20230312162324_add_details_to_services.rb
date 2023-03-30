class AddDetailsToServices < ActiveRecord::Migration[7.0]
  def change
    add_column :services, :details, :text
  end
end
