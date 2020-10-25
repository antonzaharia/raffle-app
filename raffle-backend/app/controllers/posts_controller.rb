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

    def update
        post = Post.find(params[:id])
        post.title = params[:title]
        post.description = params[:description]
        post.price = params[:price]
        post.date = params[:date]
        post.max_tickets = params[:max_tickets]
        post.image = params[:image]

        question = post.questions.find_by(id: params[:question_id])
        question.content = params[:question]

        answer1 = question.answers.find_by(id: params[:answer1_id])
        answer1.content = params[:answer1]

        answer2 = question.answers.find_by(id: params[:answer2_id])
        answer2.content = params[:answer2]

        answer3 = question.answers.find_by(id: params[:answer3_id])
        answer3.content = params[:answer3]
        [post, question, answer1, answer2, answer3].each { |e| e.save }

        render json: post
    end
end
