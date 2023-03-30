class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    before_action :authorize
    skip_before_action :authorize, only:[:hello_world]
        
    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
      end
    
    
        private 
        def authorize
            @current_user = User.find_by(id: session[:user_id])
        
            render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
          end
    
        def invalid (e)
            render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
        end
    
        def not_found (e)
            render json: {error: e}, status: :not_found
        end
 
end
