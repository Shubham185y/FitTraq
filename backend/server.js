// Assuming you have Node.js, Express, and CORS installed
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); // Added mongoose for database interaction
const Meal = require('../backend/api/models/Meal'); // Import the Meal model

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB URI
const mongoURI = 'mongodb://0.0.0.0:27017/calorieT';

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful connection
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Endpoint to handle POST request from frontend
app.post('/api/intakes', async (req, res) => {
  const { mealType, foodItem, foodInfo } = req.body;

  try {
    const meal = new Meal({
      mealType,
      foodItem,
      foodInfo
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
