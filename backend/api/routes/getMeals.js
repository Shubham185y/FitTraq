// Import necessary modules
const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal'); // Assuming you have a Meal model defined
const app = express();

router.get('/api/meals/today', async (req, res) => {
  try {
    // Get today's date
    const today = new Date();
    // Set the time to the beginning of the day (midnight)
    today.setHours(0, 0, 0, 0);
    
    // Query for meals added today
    const mealsToday = await Meal.find({
      date: {
        // Match meals with date greater than or equal to today's date
        $gte: today,
        // Match meals with date less than tomorrow's date (start of next day)
        $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000)
      }
    }).select('foodItem'); // Fetch only foodItem field
    
    res.status(200).json(mealsToday);
  } catch (error) {
    console.error('Error fetching food items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  });
  
module.exports = router;
