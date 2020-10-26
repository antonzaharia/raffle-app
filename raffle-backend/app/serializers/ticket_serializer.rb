class TicketSerializer < ActiveModel::Serializer
  attributes :id, :number, :post_id, :user_id, :post, :winner

  def post
    post = object.post
  end
end
