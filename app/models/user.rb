class User < ApplicationRecord

    has_one :church 
    has_many :assigned_items, class_name: "Item"
end
