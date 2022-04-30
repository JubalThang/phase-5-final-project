class ApplicationController < ActionController::API

    include ActionController::Cookies
    
rescue_from ActiveRecord::RecordInvalid, with: :handle_unprocessable_entity
rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found

    private
    def current_user
        User.first
    end

    def handle_unprocessable_entity(valid)
        render json: valid, status: :unprocessable_entity
    end

    def handle_not_found
        render json: {error: "Record not found"}, status: :not_found
    end
end
