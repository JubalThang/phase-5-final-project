class ApplicationController < ActionController::API

    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :handle_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found

    before_action :confirm_authencation
    # helper_method :is_loggedin?
    
    private
    def current_user
        current_user ||= User.find_by(id: session[:uid])
    end

    def handle_unprocessable_entity(valid)
        render json: valid, status: :unprocessable_entity
    end

    def handle_not_found
        render json: {error: "Record not found"}, status: :not_found
    end

    # def confirm_authencation
    #     render json: {error: "Please log in!"}, status: :unauthorized unless session.include? :uid
    # end
    def confirm_authencation
        render json: {error: "Please log in!"}, status: :unauthorized unless session.include? :uid
    end
end
