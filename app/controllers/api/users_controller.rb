class Api::UsersController < ApplicationController

    skip_before_action :confirm_authencation, only: [:create, :show]

    def index 
        render json: User.all 
    end

    def show 
        render json: current_user, status: :ok
    end

    # def show 
    #     find_user
    #     render json: @user, status: :ok
    # end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end 

    private 
    def find_user 
        @user = User.find_by_id(params[:id])
    end

    def user_params 
        params.require(:user).permit(:email, :password, :admin ,:password_confirmation, church_attributes: [:name])
    end
end
