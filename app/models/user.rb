class User < ApplicationRecord
has_secure_password
has_many :user_services, dependent: :destroy

has_many :services, through: :user_services
# has_many :main_images
has_many :events, dependent: :destroy
has_many :supports, dependent: :destroy
end
