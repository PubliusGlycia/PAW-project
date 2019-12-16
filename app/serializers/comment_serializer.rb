class CommentSerializer < ActiveModel::Serializer
    attributes :id, :email, :comment
  
    belongs_to :card, serializer: CardSerializer
end