class Api::SessionsController < ApplicationController

  skip_before_action :confirm_authencation, only: [:create]

  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:uid] = user.id 
      current_user = user 
      render json: current_user, status: :ok 
    else
      render json: {errors: "Invalid credentials"}, status: :unprocessable_entity
    end
  end

  def destroy
    session.delete :uid
    head :no_content
  end
end
