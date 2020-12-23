class NotificationSerializer < ActiveModel::Serializer
  attributes :id, :seen, :content
end
