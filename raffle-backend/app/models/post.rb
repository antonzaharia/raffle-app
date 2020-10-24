class Post < ApplicationRecord
    has_many :questions
    has_many :tickets
    has_many :cart_items
    
end
