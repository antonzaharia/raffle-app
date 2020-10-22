class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total, :cart_items_info

  def cart_items_info
    cart_items_info = object.cart_items.map do |cart_item|
      CartItemSerializer.new(cart_item)
    end
  end
end
