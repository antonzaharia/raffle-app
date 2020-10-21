class CreateCartItems < ActiveRecord::Migration[6.0]
  def change
    create_table :cart_items do |t|
      t.string :price
      t.integer :quantity
      t.integer :cart_id
      t.integer :answer_id
      t.integer :ticket_id
      t.integer :post_id
    end
  end
end
