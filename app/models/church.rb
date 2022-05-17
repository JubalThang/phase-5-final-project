class Church < ApplicationRecord
  validates :name, presence: true, uniqueness: {error: "Church is already registered."}

  belongs_to :user
  has_many :departments, dependent: :destroy
  has_many :items, through: :departments, dependent: :destroy
end
