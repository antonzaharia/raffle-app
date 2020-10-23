class TicketsController < ApplicationController
    def create
        user = User.find(params[:user_id])
        cart = Cart.find(params[:cart_id])
        quantities = params[:quantities]
        wrong_answers = 0
        tickets = []
        new_cart = ""
        
        cart.cart_items.each_with_index do |cart_item, i|
            quantities[i].times do |time|
                if cart_item.answer.value
                    number = cart_item.post.tickets.size > 0 ? cart_item.post.tickets.last.number : 0
                    ticket = Ticket.create(number: number + 1, post: cart_item.post, user: user, winner: false)
                    tickets << ticket
                else
                    wrong_answers = wrong_answers + 1
                end
            end
            cart.checked_out = true
            user.carts.create
        end
        render json: {tickets: tickets, wrong_answers: wrong_answers, cart: user.carts.last}
    end
end
