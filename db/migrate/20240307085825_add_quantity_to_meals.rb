class AddQuantityToMeals < ActiveRecord::Migration[6.1]
  def change
    add_column :meals, :quantity, :integer
    add_column :meals, :total_quantity, :integer
    add_column :meals, :total_price, :decimal
  end
end
