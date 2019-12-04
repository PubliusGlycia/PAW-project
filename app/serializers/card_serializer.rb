class CardSerializer < ActiveModel::Serializer
    attributes :id, :title, :description, :images
  
    belongs_to :list, serializer: ListSerializer
end