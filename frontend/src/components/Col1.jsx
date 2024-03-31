import React from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const Col1 = ({ meals, deleteItem, updateMeals, onUpdate }) => {
  const { user } = useUser(); // Get user object from Clerk

  onUpdate();
  const handleDeleteItem = async (id) => {
    try {
      // Pass user ID to backend along with the delete request
      await axios.delete(`http://localhost:3000/api/intakes/${id}`, {
        data: { userId: user.id }, // Include user ID in the request body
      });
      deleteItem(id);
      console.log("Item deleted successfully");
      updateMeals(); // Call updateMeals to refresh meals list
      onUpdate();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Today's Meals</h2>
      {meals.map((meal, index) => (
        <div
          key={index}
          className="flex flex-col  items-start sm:items-center justify-between bg-white rounded-md shadow-sm p-4 mb-4"
        >
          <div className="mb-2 ">
            <span className="text-lg font-semibold">{meal.foodItem}</span>
          </div>
          <button
            onClick={() => handleDeleteItem(meal._id)}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Col1;
