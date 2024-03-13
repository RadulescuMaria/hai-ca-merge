import React, { useContext, useState } from "react";
import classes from "./MealItem.module.css";
import MealForm from "./MealForm";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const MealItem = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (enteredAmount) => {
    dispatch(
      cartActions.addToCart(props.name, props.price, props.id, enteredAmount)
    );
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
      </div>
      <div className={classes.price}>${props.price}</div>
      <div>
        <MealForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
