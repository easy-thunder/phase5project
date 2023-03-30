class UserServiceSerializer < ActiveModel::Serializer
  attributes :id, :pages,:name, :initial_price, :recurring_fee, :recurring_price, :subsequent_price, :description, :details
  has_one :user
  has_one :service
end
