import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Meals from "../components/Meals";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Meals />} />
    </Routes>
  </Router>
);