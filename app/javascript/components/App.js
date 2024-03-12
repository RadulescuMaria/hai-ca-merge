import React, { Fragment } from "react";
import Header from './layout/Header';
import AvailableMeals from './Meals/AvailableMeals'

const App = (props) => {
  return (
    <Fragment>
      <Header></Header>
      <AvailableMeals meals={props.meals}></AvailableMeals>
    </Fragment>
  )
}

export default App;