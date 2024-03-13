import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const AvailableMeals = (props) => {
  const addToCartHandler = (enteredAmount) => {
    props.onAddToCart(enteredAmount)
  }
  const mealsList = props.meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      onAdd={addToCartHandler}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;