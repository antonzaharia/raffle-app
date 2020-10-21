class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total, :cart_items
end
