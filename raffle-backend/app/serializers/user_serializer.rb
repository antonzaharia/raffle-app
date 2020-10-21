class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :cart_id

  def cart_id
    cart_id = object.carts.last.id
  end
end
