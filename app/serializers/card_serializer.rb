class CardSerializer < ActiveModel::Serializer
    attributes :id, :title
  
    belongs_to :list, serializer: ListSerializer
end