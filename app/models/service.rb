class Service < ApplicationRecord
    has_many :user_services, dependent: :destroy
    has_one_attached :poster
    has_many :users, through: :user_services



    def poster_url
        Rails.application.routes.url_helpers.url_for(poster) if poster.attached?
      end
end
