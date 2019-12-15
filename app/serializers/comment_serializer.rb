class CommentSerializer < ActiveModel::Serializer
    attributes :id, :emial, :comment
  
    belongs_to :card, serializer: CardSerializer
end