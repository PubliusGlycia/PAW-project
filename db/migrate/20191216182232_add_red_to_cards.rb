class AddRedToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :red, :string
  end
end
