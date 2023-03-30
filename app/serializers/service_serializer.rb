class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :initial_price, :poster_url, :recurring_fee, :recurring_price, :subsequent_price, :description, :details, :pages
end
