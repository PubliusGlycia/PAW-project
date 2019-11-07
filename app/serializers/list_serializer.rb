class BoardSerializer < ActiveModel::Serializer
    attributes :id, :title
  
    belongs_to :board, serializer: BoardSerializer
    has_many :cards, serializer: CardSerializer
end