class RemoveOrderFromMeals < ActiveRecord::Migration[6.1]
  def change
    remove_column :meals, :order, :string
  end
end
