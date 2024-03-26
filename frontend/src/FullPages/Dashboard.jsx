import 'react-circular-progressbar/dist/styles.css';
import React, { useState } from 'react';
import MealTracker from "../components/MealTracker";
import foodData from "../components/foodData";
import Lay from "../components/lay";
import { UserButton } from "@clerk/clerk-react"

const Dashboard = () => {
  return <>
          <div>
            <h1>Meal MealTracker</h1>
            <UserButton />
            <Lay/>
          </div>
        </>
};

export default Dashboard;
