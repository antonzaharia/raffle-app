class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :cart_id, :tickets_b

  def cart_id
    if object.carts.size > 0
      cart_it = object.carts.last.id
    else
      cart_id = object.carts.create.id
    end
  end
  def tickets_b
    tickets_b = object.tickets.filter { |t| t.number.to_i > 0}
  end
end
