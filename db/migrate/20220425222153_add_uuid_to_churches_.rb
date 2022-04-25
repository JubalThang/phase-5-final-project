class AddUuidToChurches < ActiveRecord::Migration[7.0]
  def change
    add_column :churches, :uuid, :string
  end
end
