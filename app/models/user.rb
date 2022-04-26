class User < ApplicationRecord
    
    validates :email, presence: true, uniqueness: true, length: {maximum: 100}

    has_secure_password

    has_one :church, dependent: :destroy
    has_many :assigned_items, class_name: "Item"

    accepts_nested_attributes_for :church
end
