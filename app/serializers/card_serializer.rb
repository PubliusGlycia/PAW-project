class CardSerializer < ActiveModel::Serializer
    attributes :id, :title, :description, :images, :archive
  
    belongs_to :list, serializer: ListSerializer
end