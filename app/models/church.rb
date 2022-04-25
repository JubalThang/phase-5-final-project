class Church < ApplicationRecord
    validates :name, presence: true

    belongs_to :user
    has_many :departments
    has_many :items, through: :departments
end
