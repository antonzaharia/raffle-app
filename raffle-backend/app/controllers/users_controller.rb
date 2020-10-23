class UsersController < ApplicationController
    def create
        user = User.new(name: params[:name], email: params[:email], password: params[:password])
        if user.save
            render json: UserSerializer.new(user).to_json
        else
            render json: {errors: user.errors}
        end
    end

    def show
        user = User.find(params[:id])

        render json: UserSerializer.new(user).to_json
    end
end
