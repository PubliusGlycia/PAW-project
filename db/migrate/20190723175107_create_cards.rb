class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.belongs_to :list, null: false
      t.string :title, null: false
      t.timestamps
    end
  end
end
