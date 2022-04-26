class Api::UsersController < ApplicationController
    def index 
        render json: User.all 
    end

    def show 
        render json: @user, status: :ok
    end

    def create
        user = User.create!(user_params)
        user.uuid = SecureRandom.uuid
        render json: user, status: :created
    end 

    private 
    def find_user 
        @user = User.find_by(uuid: params[:uuid])
    end

    def user_params 
        params.require(:user).permit(:email, :password, :password_confirmation, church_attributes: [:name])
    end
end
