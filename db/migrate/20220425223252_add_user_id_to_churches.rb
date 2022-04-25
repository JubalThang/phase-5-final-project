class AddUserIdToChurches < ActiveRecord::Migration[7.0]
  def change
    add_reference :churches, :user, null: false, foreign_key: true
  end
end
