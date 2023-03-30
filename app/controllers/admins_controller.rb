class AdminsController < ApplicationController
    skip_before_action :authorize
    def index
        render json: Admin.all, status: :ok
    end
    def create 
        if params[:key]==Rails.application.credentials[:admin_key]
        admin = Admin.create( admin_params)
        end
    end

    def show 
        admin = Admin.find_by!(email:params[:email])
        if Rails.application.credentials[:admin_key]==params[:password]
            render json: admin, status: :ok
        end
    end

    private 
    def admin_params
        params.permit(:password, :key, :email, :admin)
    end
end



