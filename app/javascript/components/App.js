import React, { Fragment } from "react";
import Header from "./layout/Header";
import AvailableMeals from "./Meals/AvailableMeals";
import { Provider } from "react-redux";
import store from "../store/store";
const App = (props) => {
  return (
    <Provider store={store}>
      <Fragment>
        <Header></Header>
        <AvailableMeals meals={props.meals}></AvailableMeals>
      </Fragment>
    </Provider>
  );
};

export default App;
