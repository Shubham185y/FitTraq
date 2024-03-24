import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./styles.css";
import MealTracker from "./MealTracker";
import foodData from "../components/foodData";
import Col1 from "./Col1";
import Row1 from "./Row1";

const Lay = () => {
  const [items, setItems] = useState([]);
  const [meals, setMeals] = useState([]);

  const updateMeals = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/meals/today');
      setMeals(response.data);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };
  // Function to fetch meals from the backend
  const fetchMeals = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/meals/today');
      setMeals(response.data);
    } catch (error) {
      console.error('Error fetching meals:', error);
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
        <Col1 deleteItem={deleteItem} meals={meals} updateMeals={updateMeals}/>
      </div>
      <div className="col" style={{ flex: "0 0 60%", backgroundColor: "blue" }}>
        <div className="row" style={{ height: "50%", backgroundColor: "white" }}>          
          <div style={{ width: 500, height: 250  }}>
            <Row1 meals={meals} foodData={foodData} />
          </div>
        </div>
        <div className="row" style={{ height: "50%", backgroundColor: "yellow" }}>
          Row 2
        </div>
      </div>
      <div className="col" style={{ flex: "0 0 20%", backgroundColor: "orange" }}>
        {/* Pass updateMeals function as a prop to MealTracker */}
        <MealTracker foodData={foodData} onItemAdded={addItem} updateMeals={fetchMeals} />
      </div>
    </div>
  );
}

export default Lay;
