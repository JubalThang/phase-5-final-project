class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  # sort records by date of creation instead of primary key 
  implicit_order_column = :created_at
end
