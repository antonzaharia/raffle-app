class UsersController < ApplicationController
    def index
        test = { test: "its good"}
        render json: test
    end
end
