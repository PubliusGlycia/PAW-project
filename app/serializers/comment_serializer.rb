class CommentSerializer < ActiveModel::Serializer
    attributes :id, :email, :comment, :created_at, :images

    belongs_to :card, serializer: CardSerializer
end