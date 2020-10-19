class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :description
      t.string :price
      t.date :date
      t.integer :max_tickets
      t.integer :winner, :default => "None"
    end
  end
end
