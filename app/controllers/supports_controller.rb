class SupportsController < ApplicationController
    skip_before_action :authorize, only:[:index]


    def create 
        support = Support.create(support_params)
        render json: support, status: :created
    end
    def destroy 
        support = Support.find_by(id: params[:id])
        support.destroy
        render json: {deleted: "deleted"}, 
        status: :ok
    end

    def index 
        messages=Support.where(user_id: params[:user_id])
        reverse_messages = messages.reverse()
        render json: {messages: reverse_messages}, status: :ok

    end


    private 
    def support_params 
        params.permit(:message, :admin, :user_id)
    end
end
