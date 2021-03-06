class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users, id: :uuid do |t|
      t.string :email
      t.string :password_digest
      t.boolean :admin , null: false, default: false

      t.timestamps
    end
  end
end
