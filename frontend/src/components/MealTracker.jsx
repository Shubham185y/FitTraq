import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const MealTracker = ({ foodData, onItemAdded, updateMeals }) => {
  const [selectedMealType, setSelectedMealType] = useState("");
  const [selectedFoodItem, setSelectedFoodItem] = useState("");
  const { user } = useUser();

  useEffect(() => {
    // Here you can access the user ID from `user.id`
    console.log("User ID:", user.id);
  }, [user]);

  const mealTypes = Array.from(new Set(foodData.map((food) => food.FoodType)));

  const handleMealTypeChange = (event) => {
    const mealType = event.target.value;
    setSelectedMealType(mealType);
    setSelectedFoodItem("");
  };

  const handleFoodItemChange = (event) => {
    const foodItem = event.target.value;
    setSelectedFoodItem(foodItem);
  };

  const handleSubmit = async () => {
    if (selectedMealType && selectedFoodItem) {
      const selectedFood = foodData.find(
        (food) =>
          food.FoodType === selectedMealType &&
          food.Description === selectedFoodItem
      );

      if (selectedFood) {
        try {
          const currentDate = new Date();
          const response = await axios.post(
            "http://localhost:3000/api/intakes",
            {
              userId: user.id,
              mealType: selectedMealType,
              foodItem: selectedFoodItem,
              foodInfo: selectedFood.Data,
              date: currentDate,
            }
          );

          // Pass the added item to the parent component
          onItemAdded({
            mealType: selectedMealType,
            foodItem: selectedFoodItem,
            foodInfo: selectedFood.Data,
            date: currentDate,
          });

          // Update meals in Col1 component
          updateMeals();

          console.log("Data successfully sent to backend:", response.data);
        } catch (error) {
          console.error("Error sending data to backend:", error);
        }
      }
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4">Meals</h1>
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2">
        Select Meal Type:
      </label>
      <select
        value={selectedMealType}
        onChange={handleMealTypeChange}
        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      >
        <option value="">Select</option>
        {mealTypes.map((mealType) => (
          <option key={mealType} value={mealType}>
            {mealType}
          </option>
        ))}
      </select>
    </div>
    {selectedMealType && (
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          Select Food Item:
        </label>
        <select
          value={selectedFoodItem}
          onChange={handleFoodItemChange}
          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Select</option>
          {foodData
            .filter((food) => food.FoodType === selectedMealType)
            .map((food) => (
              <option key={food.Description} value={food.Description}>
                {food.Description}
              </option>
            ))}
        </select>
      </div>
    )}
    <button
      onClick={handleSubmit}
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      Submit
    </button>
  </div>
  
  );
};

export default MealTracker;
