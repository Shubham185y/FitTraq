import "react-circular-progressbar/dist/styles.css";
import React, { useState } from "react";
import Lay from "../components/Lay";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import "./styl.css";
const Dashboard = () => {
  return (
    <>
      <div className="header flex justify-between items-center px-4 py-3 bg-white shadow-md  border-gray-100">
  <Link className="text-4xl font-bold text-black" to={"/"}>
    TraqFit
  </Link>
  <h2 className="text-xl text-gray-800">Meal Tracker</h2>
  <Link className="logout inline-block bg-blue-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors">
    <UserButton />
  </Link>
</div>


      <Lay />
    </>
  );
};

export default Dashboard;
