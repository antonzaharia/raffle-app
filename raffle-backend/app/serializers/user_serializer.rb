class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :cart_id, :tickets_b, :admin

  def cart_id
    if object.carts.size > 0
      cart_it = object.carts.last.id
    else
      cart_id = object.carts.create.id
    end
  end
  def tickets_b
    tickets_filetered = object.tickets.filter { |t| t.number.to_i > 0}
    tickets_s = tickets_filetered.map { |t| TicketSerializer.new(t) }
    tickets_b = tickets_s.reverse
  end
end
