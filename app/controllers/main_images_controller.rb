class MainImagesController < ApplicationController
skip_before_action :authorize
    def create 
       main_image= MainImage.create(main_image_params)
       render json: main_image, status: :created
    end




    private
    def main_image_params 
        params.permit(:user_id, :main_image_use, :image)
    end
end
