class AddPagesToUserServices < ActiveRecord::Migration[7.0]
  def change
    add_column :user_services, :pages, :integer, default: 0
  end
end
