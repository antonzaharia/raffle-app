class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :max_tickets, :price, :date, :question, :answers, :tickets_number

  def question
    question = object.questions.first
  end

  def answers
    answers = [object.questions.first.answers]
  end

  def tickets_number
    tickets_number = object.tickets.size 
  end
end
