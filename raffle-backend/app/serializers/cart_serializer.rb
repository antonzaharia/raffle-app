class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total, :cart_items_info

  def cart_items_info
    cart_items_info = object.cart_items.map do |cart_item|
      CartItemSerializer.new(cart_item)
    end
  end

  def total
    to_return = 0.0
    object.cart_items.each do |ci|
      to_return = to_return + ci.price.to_f
    end
    total = to_return
  end
end
