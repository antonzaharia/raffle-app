class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end

    def show
        post = Post.find(params[:id])
        
        render json: PostSerializer.new(post).as_json
    end

    def create
        post = Post.create(
            title: params[:title], 
            description: params[:description], 
            price: params[:price], 
            date: params[:date],
            max_tickets: params[:max_tickets],
            image: params[:image]
        )
        question = Question.create({ content: params[:question], post: post })
        question.answers.create({content: params[:answer1], value: false})
        question.answers.create({content: params[:answer2], value: false})
        question.answers.create({content: params[:answer3], value: true})

        render json: post
    end
end
