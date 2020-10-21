class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :cart_id, :ticket_id, :price
end
