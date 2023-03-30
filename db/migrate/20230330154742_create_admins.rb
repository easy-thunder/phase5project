class CreateAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :admins do |t|
      t.string :password_digest
      t.string :email

      t.timestamps
    end
  end
end
