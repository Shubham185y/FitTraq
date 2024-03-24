// Import necessary modules
const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal'); // Assuming you have a Meal model defined
const app = express();

router.get('/api/meals/today', async (req, res) => {
    try {
      const foods = await Meal.find({}, 'foodItem'); // Fetch only foodItem field
      res.status(200).json(foods);
    } catch (error) {
      console.error('Error fetching food items:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
module.exports = router;
