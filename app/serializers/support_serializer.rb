class SupportSerializer < ActiveModel::Serializer
  attributes :id, :message, :admin
  has_one :user
end
