class CardSerializer < ActiveModel::Serializer
    attributes :id, :title, :description, :green, :images, :archive
  
    belongs_to :list, serializer: ListSerializer
end