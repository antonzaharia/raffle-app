class CartItem < ApplicationRecord
    belongs_to :cart
    belongs_to :ticket
    belongs_to :answer
    belongs_to :post
end
