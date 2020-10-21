class CreateCartItems < ActiveRecord::Migration[6.0]
  def change
    create_table :cart_items do |t|
      t.integer :cart_id
      t.integer :ticket_id
      t.string :price

      t.timestamps
    end
  end
end
