class Api::SessionsController < ApplicationController
  def create
    user = User.find(params[:email])
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
