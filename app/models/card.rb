class Card < ApplicationRecord
  belongs_to :list
  has_many :comments

  validate :file_size_have_to_be_less_than_5mb, on: :create

  has_many_attached :images

  def file_size_have_to_be_less_than_5mb
    return false unless images.attached?

    images.attachments.each { |photo| errors.add(:images, 'can\'t be greater than 5MB') if photo.byte_size > 5_000_000 }
  end
end
