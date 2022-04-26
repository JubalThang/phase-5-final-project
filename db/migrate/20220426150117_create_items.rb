class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :model_no
      t.string :sn
      t.string :uuid
      t.string :image_url
      t.belongs_to :department, null: false, foreign_key: true

      t.timestamps
    end
  end
end
