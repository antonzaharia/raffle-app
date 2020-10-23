class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :cart_id

  def cart_id
    if object.carts.size > 0
      cart_it = object.carts.last.id
    else
      cart_id = object.carts.create.id
    end
  end
end
