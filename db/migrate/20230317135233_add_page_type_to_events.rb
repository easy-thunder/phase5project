class AddPageTypeToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :page_type, :string
  end
end
