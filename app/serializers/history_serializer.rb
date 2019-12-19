class HistorySerializer < ActiveModel::Serializer
    attributes :id, :email, :created_at, :updated_at

    belongs_to :card, serializer: CardSerializer
end