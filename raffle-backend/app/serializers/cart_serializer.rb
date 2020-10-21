class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total
end
