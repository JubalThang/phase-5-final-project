class AddUuidToDepartments < ActiveRecord::Migration[7.0]
  def change
    add_column :departments, :uuid, :string, null: false
  end
end
