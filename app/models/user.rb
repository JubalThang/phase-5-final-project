class User < ApplicationRecord

    validates :email, presence: true, uniqueness: true,  length: { maximum: 80 } 
    has_secure_password

    has_one :church, dependent: :destroy
    accepts_nested_attributes_for :church
end
