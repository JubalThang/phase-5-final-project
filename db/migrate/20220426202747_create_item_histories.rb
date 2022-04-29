class CreateItemHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :item_histories, id: :uuid do |t|
      t.datetime :dop
      t.float :price
      t.string :receive_image
      t.belongs_to :item, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
