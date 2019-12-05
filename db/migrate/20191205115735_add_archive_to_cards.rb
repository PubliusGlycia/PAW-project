class AddArchiveToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :archive, :boolean, default: false
  end
end
