class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :cart, :price, :quantity, :answer, :post
end
