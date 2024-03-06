import React from "react";
import { Fragment } from "react";

import classes from "./Header.module.css";
// import mealsImage from "../../../assets/meals.jpeg";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React-Rails Food</h1>
        <ul>
          <li>List1</li>
          <li>List2</li>
          <li>
            <HeaderCartButton onClick={props.onShowCart} />
          </li>
        </ul>
      </header>
    </Fragment>
  );
};

export default Header;
