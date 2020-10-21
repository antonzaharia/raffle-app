class CreateTickets < ActiveRecord::Migration[6.0]
  def change
    create_table :tickets do |t|
      t.integer :number
      t.integer :post_id
      t.integer :user_id
      t.integer :answer_id
      t.boolean :winner, default: false
      
      t.timestamps
    end
  end
end
