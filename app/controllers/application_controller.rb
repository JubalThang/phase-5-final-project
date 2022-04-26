class ApplicationController < ActionController::API

rescue_from ActiveRecord::RecordInvalid, with: :handle_unprocessable_entity

    private
    def handle_unprocessable_entity(valid)
        render json: valid, status: :unprocessable_entity
    end
end
