class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end

    def show
        post = Post.find(params[:id])
        
        render json: PostSerializer.new(post).as_json
    end
end
