class ConfigController < ApplicationController
    skip_before_action :authorize
    # def index
    # publishableKey = Rails.application.credentials.stripe[:public_key]
    #   content_type 'text/html'
    #   {publishableKey: publishableKey}.to_json
    # end
    def index
        publishableKey = Rails.application.credentials.stripe[:public_key]
        render json:  {publishableKey: publishableKey}
        end



end
