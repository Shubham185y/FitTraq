// import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React, { useState } from "react";
import MealTracker from "../components/MealTracker";
import foodData from "../components/foodData";
import Lay from "../components/Lay";

// importing layoutcopy

const Dashboard = () => {
  return (
    <>
      <div>
        <h1>Meal MealTracker</h1>

        <Lay />
      </div>
    </>
  );
};

export default Dashboard;
