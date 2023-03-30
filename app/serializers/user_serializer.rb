class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :admin, :url1, :url2, :url3, :phone, :api, :additional_form_details, :site_name, :price
  has_many :services
  has_many :events
  has_many :supports
  # has_many :main_images
end
