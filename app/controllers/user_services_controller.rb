class UserServicesController < ApplicationController
    
    def create

        # user=User.find_by(id: params[:user_id])
        user_service = UserService.create(user_service_params)
        # service = Service.find_by(id: params[:service_id])
        render json: user_service, status: :created

    end

    def show 
        user = User.find_by!(id: params[:id]) 
        user_services = UserService.where(user_id: (user.id))
        
        # user_services = UserService.where(user_id: (user.id))
        # services = user_services.map do |user_service| 
        #     service = Service.find_by(id: user_service.service_id)
        #     return service
        # end
        render json: user_services, status: :ok
        # render json: user.services, status: :ok
    end


    
    def destroy 
        UserService.find_by!(id: params[:id]).destroy
        render json: {deleted: "deleted"}, status: :ok
    end

    



private 
    def user_service_params 
        params.permit(:user_id, :service_id, :pages, :name, :initial_price, :recurring_fee, :recurring_price, :subsequent_price, :description, :details)
    end

end
