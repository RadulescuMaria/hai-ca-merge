import React, { useRef, useState } from "react";

import classes from "./MealForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {

  const amountInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value
    props.onAddToCart(enteredAmount)
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            default: "1",
          }}
        ></Input>
        <button type="submit"> + Add</button>
      </div>
    </form>
  );
};

export default MealItemForm;