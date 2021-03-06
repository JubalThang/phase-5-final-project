class CreateDepartments < ActiveRecord::Migration[7.0]
  def change
    create_table :departments, id: :uuid do |t|
      t.string :name
      t.belongs_to :church, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
