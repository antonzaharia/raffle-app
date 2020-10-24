class Answer < ApplicationRecord
    belongs_to :question
    has_many :cart_items
end
