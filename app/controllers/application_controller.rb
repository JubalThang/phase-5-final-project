class ApplicationController < ActionController::API

    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :handle_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found

    # Test this if the check_auth method is exceptions
    rescue_from ActiveRecord::RecordInvalid, with: :check_auth

    before_action :confirm_authencation
    # helper_method :is_loggedin?
    # before_action :check_auth
    
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

    def is_admin?
        !!(current_user.admin)
    end

    def check_auth
        render json: {message: "You have not authorized to do this!"}, status: :unauthorized unless is_admin?
    end

    def confirm_authencation
        render json: {error: "Please log in!"}, status: :unauthorized unless session.include? :uid
    end
end
