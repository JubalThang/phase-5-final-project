class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items, id: :uuid do |t|
      t.string :model_no
      t.string :sn
      t.string :image_url
      t.belongs_to :user, null: false, foreign_key: true, type: :uuid
      t.belongs_to :department, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
