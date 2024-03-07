class AddQuantityToMeals < ActiveRecord::Migration[6.1]
  def change
    add_column :meals, :quantity, :integer, default: 0
    add_column :meals, :total_quantity, :integer, default: 0
    add_column :meals, :total_price, :decimal, default: 0
  end
end
