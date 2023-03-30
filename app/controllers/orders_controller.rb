class OrdersController < ApplicationController
    skip_before_action :authorize
    def index 
        orders = Order.all

        render json: orders
    end

    def show 

    end

    def new 

    end

    def create 
        @order = Order.new(order_params)
        if @order.save 
            render json: @order
        else 
            render json: @order.errors
        end
    end

    def edit 

    end

    def update 

    end

    def destroy 

    end

private 

    def order_params
        params.require(:order).permit(:status, :paid_at, :stripe_id)
    end



end
