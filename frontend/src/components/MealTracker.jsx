import React, { useState } from 'react';
import axios from 'axios';

const MealTracker = ({ foodData, onItemAdded, updateMeals }) => {
  const [selectedMealType, setSelectedMealType] = useState('');
  const [selectedFoodItem, setSelectedFoodItem] = useState('');

  const mealTypes = Array.from(new Set(foodData.map((food) => food.FoodType)));

  const handleMealTypeChange = (event) => {
    const mealType = event.target.value;
    setSelectedMealType(mealType);
    setSelectedFoodItem('');
  };

  const handleFoodItemChange = (event) => {
    const foodItem = event.target.value;
    setSelectedFoodItem(foodItem);
  };

  const handleSubmit = async () => {
    if (selectedMealType && selectedFoodItem) {
      const selectedFood = foodData.find(
        (food) => food.FoodType === selectedMealType && food.Description === selectedFoodItem
      );
  
      if (selectedFood) {
        try {
          const currentDate = new Date();
          const response = await axios.post('http://localhost:3000/api/intakes', {
            mealType: selectedMealType,
            foodItem: selectedFoodItem,
            foodInfo: selectedFood.Data,
            date: currentDate
          });
  
          // Pass the added item to the parent component
          onItemAdded({
            mealType: selectedMealType,
            foodItem: selectedFoodItem,
            foodInfo: selectedFood.Data,
            date: currentDate
          });

          // Update meals in Col1 component
          updateMeals();
  
          console.log('Data successfully sent to backend:', response.data);
        } catch (error) {
          console.error('Error sending data to backend:', error);
        }
      }
    }
  };
  

  return (
    <div>
      <h1>Meal Tracker</h1>
      <label>
        Select Meal Type:
        <select value={selectedMealType} onChange={handleMealTypeChange}>
          <option value="">Select</option>
          {mealTypes.map((mealType) => (
            <option key={mealType} value={mealType}>
              {mealType}
            </option>
          ))}
        </select>
      </label>
      <br />
      {selectedMealType && (
        <>
          <label>
            Select Food Item:
            <select value={selectedFoodItem} onChange={handleFoodItemChange}>
              <option value="">Select</option>
              {foodData
                .filter((food) => food.FoodType === selectedMealType)
                .map((food) => (
                  <option key={food.Description} value={food.Description}>
                    {food.Description}
                  </option>
                ))}
            </select>
          </label>
          <br />
        </>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default MealTracker;
