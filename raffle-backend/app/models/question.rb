class Question < ApplicationRecord
    belongs_to :post
    has_many :answers
end
