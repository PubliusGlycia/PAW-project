class Cards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :isArchived, :boolean
  end
end
