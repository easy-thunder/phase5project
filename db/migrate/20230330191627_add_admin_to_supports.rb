class AddAdminToSupports < ActiveRecord::Migration[7.0]
  def change
    add_column :supports, :admin, :boolean, default: false
  end
end
