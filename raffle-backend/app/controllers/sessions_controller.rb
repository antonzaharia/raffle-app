class SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            render json: user, status: :ok
        else
            render json: {errors: {Invalid: "Email or Password"}, status: :unauthorized}
        end
    end
end
