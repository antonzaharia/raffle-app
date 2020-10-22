class CartItemsController < ApplicationController
    def destroy
        id = params[:id]
        cart_item = CartItem.find(id)
        cart_item.destroy

        render json: id
    end
end
