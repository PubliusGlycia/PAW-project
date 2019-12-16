class CardSerializer < ActiveModel::Serializer
    attributes :id, :title, :description, :green, :blue, :yellow, :red, :images, :archive
  
    belongs_to :list, serializer: ListSerializer
end