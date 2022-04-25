class CreateItemHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :item_histories do |t|
      t.datetime :dop
      t.float :price
      t.string :receive_img
      t.belongs_to :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
