class CartsController < ApplicationController
    def create
        user = User.find(params[:user_id])
        answer = Answer.find(params[:answer_id])
        post = Post.find(params[:post_id])

        if user.carts.size == 0
            @cart = user.carts.create
        elsif user.carts.last.checked_out
            @cart = user.carts.create
        else
            @cart = user.carts.last
        end
        ticket = Ticket.create(number: 0, post: post, user: user, winner: false)
        @cart.cart_items.create(answer: answer, post: post, price: post.price, quantity: params[:numberOfTickets], ticket: ticket)

        render json: CartSerializer.new(@cart).as_json
    end
end
