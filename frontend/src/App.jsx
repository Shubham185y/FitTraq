// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeFull from "./FullPages/HomeFull";
import Dashboard from "./FullPages/Dashboard";
import BmiCalculator from "./components/BmiCalculator";

export default function App() {
  return (
    <>
      <HomeFull />
    </>
  );
}
