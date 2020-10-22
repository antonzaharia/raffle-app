class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :cart_id, :price, :quantity, :answer, :post
end
