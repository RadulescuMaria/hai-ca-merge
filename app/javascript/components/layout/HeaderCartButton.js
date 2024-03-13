import React, { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import { useSelector } from "react-redux";
const HeaderCartButton = (props) => {

  const itemsQuantity = useSelector(state => state.cart.totalQuantity)

  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Add to cart</span>
      <span className={classes.badge}>{itemsQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;