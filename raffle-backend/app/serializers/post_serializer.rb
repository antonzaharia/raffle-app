class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :price, :date, :question, :answers

  def question
    question = object.questions.first
  end

  def answers
    answers = [object.questions.first.answers]
  end
end
