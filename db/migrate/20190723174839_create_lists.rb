class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.belongs_to :board, null: false
      t.string :title, null: false
      t.timestamps
    end
  end
end
