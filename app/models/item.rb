class Item < ApplicationRecord
  # serial number must be unique when same model name
  validates :sn, presence: true, uniqueness: {scope: [:model_no]}
  
  belongs_to :department
  belongs_to :user
end
