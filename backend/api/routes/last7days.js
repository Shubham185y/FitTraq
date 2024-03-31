// Import necessary modules
const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal'); // Assuming you have a Meal model defined

// Define a route to fetch meal data for the last 7 days
router.get("/api/meals/last7days", async (req, res) => {
  const { userId } = req.query;
  try {
    const endDate = new Date(); // End date is today
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 6); // Calculate start date 7 days ago

    // Fetch meal data for the last 7 days for the specified user
    const meals = await Meal.find({
      userId: userId, // Filter by user ID
      date: { $gte: startDate, $lte: endDate }, // Filter by date range
    }).sort({ date: 1 }); // Sort by date in ascending order

    // Create an object to store daily total calories
    const dailyCaloriesData = {};

    // Iterate through last 7 days to initialize dailyCaloriesData with 0 for each day
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dailyCaloriesData[currentDate.toDateString()] = 0;
      currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    }

    // Update dailyCaloriesData with actual calorie consumption
    meals.forEach((meal) => {
      const dateKey = meal.date.toDateString(); // Convert date to string to use as key
      const caloriesConsumed =
        meal.foodInfo && meal.foodInfo.Kilocalories
          ? meal.foodInfo.Kilocalories
          : 0;
      // console.log(dateKey, caloriesConsumed);
      dailyCaloriesData[dateKey] += caloriesConsumed; // Add calories to total for that day
    });

    // Format data to array of objects with date and total calories
    const formattedData = Object.keys(dailyCaloriesData).map((date) => ({
      date: date,
      totalCalories: dailyCaloriesData[date]
    }));
    // console.log(formattedData);
    // Send the formatted data as response
    res.status(200).json(formattedData);
  } catch (error) {
    console.error("Error fetching meal data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



module.exports = router;