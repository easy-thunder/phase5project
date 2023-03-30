class PhotosController < ApplicationController
    def new
        @photo = Photo.new
    end
    def create
  Photo.create(photo_params)
    end

      def index
        @photos = Photo.all
      end
     
      private
     
      def photo_params
        params.require(:photo).permit(:image)
      end
  end