class AddYellowToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :yellow, :string
  end
end
