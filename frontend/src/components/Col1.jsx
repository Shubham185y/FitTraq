import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Col1 = ({ meals, deleteItem, updateMeals }) => {
  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/intakes/${id}`);
      deleteItem(id);
      console.log('Item deleted successfully');
      updateMeals(); // Call updateMeals to refresh meals list
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h2>Today's Meals</h2>
      {meals.map((meal, index) => (
        <div key={index}>
          <span>{meal.foodItem}</span>
          <span>{meal.work}</span>
          <button onClick={() => handleDeleteItem(meal._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Col1;
