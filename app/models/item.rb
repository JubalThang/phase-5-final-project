class Item < ApplicationRecord
  # serial number must be unique when same model_no
  validates :sn, presence: true, unique: {scope: [:model_no]}

  belongs_to :department
  belongs_to :user
end
