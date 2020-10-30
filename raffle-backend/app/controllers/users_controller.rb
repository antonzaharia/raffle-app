class UsersController < ApplicationController
    def create
        user = User.new(name: params[:name], email: params[:email], password: params[:password])
        if user.save
            render json: UserSerializer.new(user).to_json, status: :ok
        else
            render json: {errors: user.errors, status: :unauthorized}
        end
    end

    def show
        user = User.find(params[:id])

        render json: UserSerializer.new(user).to_json
    end
end
