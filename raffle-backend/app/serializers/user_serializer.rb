class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :cart_id, :tickets

  def cart_id
    if object.carts.size > 0
      cart_it = object.carts.last.id
    else
      cart_id = object.carts.create.id
    end
  end
  def tickets
    tickets = object.tickets
  end
end
