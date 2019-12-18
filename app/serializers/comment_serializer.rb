class CommentSerializer < ActiveModel::Serializer
    attributes :id, :email, :comment, :created_at

    belongs_to :card, serializer: CardSerializer
end