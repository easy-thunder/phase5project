class EventSerializer < ActiveModel::Serializer
  attributes :id, :image_use, :user_id, :poster_url, :title, :price, :not_included_in_form, :page_type
  has_one :user


end
