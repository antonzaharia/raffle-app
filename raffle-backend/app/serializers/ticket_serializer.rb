class TicketSerializer < ActiveModel::Serializer
  attributes :id, :number, :post_id, :user_id, :answer_id
end
