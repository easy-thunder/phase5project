class ServicesController < ApplicationController
    skip_before_action :authorize
    before_action :set_service, only: %i[ update destroy ]

    def create
        service = Service.create(service_params)
        render json: service, status: :created
    end

    def index 
        render json: Service.all, status: :ok
    end

    def show 
        render json: Service.find_by!(id: params[:id]), status: :ok
    end

    def update
        @service.update(service_params)
        render json: service, status: :ok
    end

    def destroy 
        @service.destroy
        render json: {deleted: "deleted"}, status: :ok
    end



private

def set_service
    @service = Service.find(params[:id])
  end
    def service_params 
        params.permit(:name, :initial_price, :recurring_price, :recurring_fee, :subsequent_price, :description, :details, :poster, :pages, :id )
    end

end
