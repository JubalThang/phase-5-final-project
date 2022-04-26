class CreateChurches < ActiveRecord::Migration[7.0]
  def change
    create_table :churches do |t|
      t.string :name
      t.string :uuid
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
