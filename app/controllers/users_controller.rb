class UsersController < ApplicationController
    skip_before_action :authorize, only:[:create,:index]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    def show
        user = User.find_by(id: session[:user_id])
        render json: user
     end
    def destroy 
        user.find_by!(id: params[:id]).destroy
    end
    def update 
        user = User.find_by!(id: params[:id])
        user.update(user_params)
        render json: user, status: :ok
    end
    def service_delete 
        user = User.find_by(id: params[:user_id])
        service = user.services.find_by(id: params[:id])
        service.delete
    end
    def index
        render json: User.all, status: :ok
    end

    def confirm_payment 
        user = User.find_by(id: params[:id])
        mail = PaymentMailer.new_payment(user)
        mail.deliver_now 
        render json: user, status: :ok
        #testing
    end


    private 
    def user_params 
        params.permit(:email, :password, :price, :user_id, :admin, :url1, :url2, :url3, :phone, :api, :additional_form_details, :site_name) 
    end
end
