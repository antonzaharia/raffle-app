class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :cart_id

  def cart_id
    cart_id = false
    if object.carts.size > 0
      cart_it = object.carts.last.id
    end
  end
end
