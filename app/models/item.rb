class Item < ApplicationRecord

  validates :sn, uniqueness: { scope: [ :model_no ] }

  has_one :item_history, dependent: :destroy
  belongs_to :department


  accepts_nested_attributes_for :item_history
end
