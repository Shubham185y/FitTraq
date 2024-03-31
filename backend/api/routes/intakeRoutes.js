// Import necessary modules
const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal'); // Assuming you have a Meal model defined
const app = express();

// Define a route to handle POST requests to '/api/intakes'
router.post('/api/intakes', async (req, res) => {
  const { mealType, foodItem, foodInfo, date, userId } = req.body; // Extract date from request body

  try {
    const meal = new Meal({
      userId,
      mealType,
      foodItem,
      foodInfo,
      date
    });

    await meal.save();
    console.log('Data saved to MongoDB:', meal);
    res.status(200).json({ message: 'Data saved to MongoDB' });
  } catch (error) {
    console.error('Error saving data to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Default route
app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});




// Export the router to use in your main application file
module.exports = router;
