import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import MealTracker from "./MealTracker";
import foodData from "../components/foodData";
import Col1 from "./Col1";
import Row1 from "./Row1";
import Row2 from "./Row2";

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

  const [updateRow2, setUpdateRow2] = useState(false);

  // Function to update Row2
  const handleCol1Update = () => {
    setUpdateRow2(prevState => !prevState);
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8 mt-8">
  {/* Meal Tracker */}
  <div className="w-full md:w-1/5">
    <MealTracker
      foodData={foodData}
      onItemAdded={addItem}
      updateMeals={fetchMeals}
    />
  </div>

  {/* Rows */}
  <div className="w-full md:w-3/5 flex flex-col gap-8">
    {/* Row 1 */}
    <div className="w-full bg-green-200 rounded-lg shadow-md mb-8 md:mb-0" style={{ flexBasis: '60%' }}>
      <Row1 meals={meals} foodData={foodData} />
    </div>

    {/* Row 2 */}
    <div className="w-full bg-yellow-100 rounded-lg shadow-md" style={{ flexBasis: '60%' }}>
      <Row2 shouldUpdate={updateRow2} />
    </div>
  </div>

  {/* Col1 */}
  <div className="w-full md:w-1/5">
    <div className="h-full overflow-y-auto">
      <Col1
        deleteItem={deleteItem}
        meals={meals}
        updateMeals={fetchMeals}
        onUpdate={handleCol1Update}
      />
    </div>
  </div>
</div>


  
  






  );
};

export default Lay;
