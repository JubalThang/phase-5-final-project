class ItemSerializer < ActiveModel::Serializer
  attributes :id, :model_no, :sn, :image_url
  belongs_to :department
end
