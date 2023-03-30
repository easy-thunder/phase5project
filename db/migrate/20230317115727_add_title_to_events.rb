class AddTitleToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :title, :string
    add_column :events, :price, :float
    add_column :events, :not_included_in_form, :text
  end
end
