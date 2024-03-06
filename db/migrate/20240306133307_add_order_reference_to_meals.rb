class AddOrderReferenceToMeals < ActiveRecord::Migration[6.1]
  def change
    add_column :meals, :order, :string
  end
end
