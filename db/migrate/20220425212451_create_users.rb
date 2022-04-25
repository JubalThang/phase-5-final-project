class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email , null: false
      t.string :password_digest
      t.string :uuid , null: false
      t.string :admin, null: false, default: false

      t.timestamps
    end
  end
end
