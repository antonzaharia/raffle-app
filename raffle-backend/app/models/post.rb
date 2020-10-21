class Post < ApplicationRecord
    has_many :questions
    has_many :tickets
end
