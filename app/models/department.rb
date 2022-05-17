class Department < ApplicationRecord

  validates :name, presence: true, uniqueness: true

  belongs_to :church
  
  has_many :items, dependent: :destroy
end
