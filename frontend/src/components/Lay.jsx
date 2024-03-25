import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import MealTracker from "./MealTracker";
import foodData from "../components/foodData";
import Col1 from "./Col1";
import Row1 from "./Row1";

// Importing data

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import revenueData from "../data/revenueData.json";
import sourceData from "../data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const Lay = () => {
  const [items, setItems] = useState([]);
  const [meals, setMeals] = useState([]);

  const updateMeals = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/meals/today");
      setMeals(response.data);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };
  // Function to fetch meals from the backend
  const fetchMeals = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/meals/today");
      setMeals(response.data);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []); // Fetch meals when component mounts

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    // Code to delete item from database
  };

  return (
    <div className="container">
      <div className="col" style={{ flex: "0 0 20%", backgroundColor: "red" }}>
        <Col1 deleteItem={deleteItem} meals={meals} updateMeals={updateMeals} />
      </div>
      <div className="col" style={{ flex: "0 0 60%", backgroundColor: "blue" }}>
        <div
          className="row"
          style={{ height: "50%", backgroundColor: "white" }}
        >
          <div style={{ width: 500, height: 250 }}>
            <Row1 meals={meals} foodData={foodData} />
          </div>
        </div>
        <div
          className="row"
          style={{ height: "50%", backgroundColor: "yellow" }}
        >
          {/* ///////////////////////////////////////////////// */}
          <Line
            data={{
              labels: revenueData.map((data) => data.label),
              datasets: [
                {
                  label: "Revenue",
                  data: revenueData.map((data) => data.revenue),
                  backgroundColor: "#064FF0",
                  borderColor: "#064FF0",
                },
                {
                  label: "Cost",
                  data: revenueData.map((data) => data.cost),
                  backgroundColor: "#FF3030",
                  borderColor: "#FF3030",
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.5,
                },
              },
              plugins: {
                title: {
                  text: "Weekly Fitness & Consumtion",
                },
              },
            }}
          />
          {/* /////////////////////////////////////////////////////////////// */}
        </div>
      </div>
      <div
        className="col"
        style={{ flex: "0 0 20%", backgroundColor: "orange" }}
      >
        {/* Pass updateMeals function as a prop to MealTracker */}
        <MealTracker
          foodData={foodData}
          onItemAdded={addItem}
          updateMeals={fetchMeals}
        />
      </div>
    </div>
  );
};

export default Lay;
