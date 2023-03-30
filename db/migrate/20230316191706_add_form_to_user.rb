class AddFormToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :url1, :string
    add_column :users, :url2, :string
    add_column :users, :url3, :string
    add_column :users, :phone, :string
    add_column :users, :api, :string
    add_column :users, :additional_form_details, :text
    add_column :users, :site_name, :string
  end
end
