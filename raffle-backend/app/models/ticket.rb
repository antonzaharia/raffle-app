class Ticket < ApplicationRecord
    belongs_to :post
    belongs_to :user
    belongs_to :answer

    has_many :cart_items
    has_many :carts, through: :cart_items
    
end
