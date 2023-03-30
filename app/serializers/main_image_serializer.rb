class MainImageSerializer < ActiveModel::Serializer
  attributes :id, :main_image_use, :image
  has_one :user
end
