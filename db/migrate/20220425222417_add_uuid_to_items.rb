class AddUuidToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :uuid, :string
  end
end
