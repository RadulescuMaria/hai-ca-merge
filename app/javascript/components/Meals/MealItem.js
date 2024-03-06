import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealForm from "./MealForm";

const MealItem = (props) => {

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
      </div>
      <div className={classes.price}>${props.price}</div>
      <div>
        <MealForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
