class Api::UsersController < ApplicationController
    def index 
        render json: User.all 
    end

    def create
        user = User.create!(user_params)
        user.uuid = SecureRandom.uuid
        render json: user, status: :created
    end 

    private 
    # def find_user 

    # end

    def user_params 
        params.require(:user).permit(:email, :password, :password_confirmation, church_attributes: [:name])
    end
end
