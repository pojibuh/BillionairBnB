class Api::SessionsController < ApplicationController
  def destroy
    if current_user
      current_user.reset_session_token!
      @session_token = nil
    end

    render json: {}
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: { errors: ['invalid credentials'] }, status: 422
    end
  end
end
