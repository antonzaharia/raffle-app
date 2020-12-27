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
                    number = cart_item.post.tickets.last.number.to_i
                    if cart_item.post.tickets.size > 0
                        last_ticket = cart_item.post.tickets.max { |a,b| a.number <=> b.number }
                        number = last_ticket.number
                    end
                    ticket = Ticket.create(number: number + time + 1, post: cart_item.post, user: user, winner: false)
                    tickets << ticket
                else
                    wrong_answers = wrong_answers + 1
                end
            end
            cart.checked_out = true
            user.carts.create
        end
        render json: {tickets: tickets, wrong_answers: wrong_answers, cart: CartSerializer.new(user.carts.last)}
    end

    def update
        post = Post.find(params[:id])
        winner_number = rand(1..post.tickets.size)
        post.tickets.each do |ticket|
            if ticket.number == winner_number
                Notification.create(seen: false, user: ticket.user, content: "Congradulations! You're a winner!")
                ticket.update(winner: true)
            else
                ticket.update(winner: false)
                Notification.create(seen: false, user: ticket.user, content: "Unfortunately, this time another ticket is a winner.")
            end
        end
        post.update(winner: winner_number)
        post.save
        render json: post
    end
end
