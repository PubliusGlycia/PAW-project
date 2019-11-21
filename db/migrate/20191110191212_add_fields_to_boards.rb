class AddFieldsToBoards < ActiveRecord::Migration[6.0]
  def change
    add_column :boards, :user_id, :bigint
  end
end
