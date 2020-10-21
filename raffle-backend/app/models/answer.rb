class Answer < ApplicationRecord
    belongs_to :question
    belongs_to :post
    has_many :cart_items
end
