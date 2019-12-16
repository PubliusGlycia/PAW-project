class AddGreenToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :green, :string
  end
end
