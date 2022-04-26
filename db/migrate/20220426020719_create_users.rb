class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :emial
      t.string :uuid
      t.string :password_digest
      t.boolean :admin , null: false, default: false

      t.timestamps
    end
  end
end
