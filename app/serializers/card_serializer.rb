class CardSerializer < ActiveModel::Serializer
    attributes :id, :title, :description
  
    belongs_to :list, serializer: ListSerializer
end