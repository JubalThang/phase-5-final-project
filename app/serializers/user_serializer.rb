class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :admin

  has_one :church
end
