// Assuming you have Node.js, Express, and CORS installed
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); // Added mongoose for database interaction
const intakeRoutes = require('../backend/api/routes/intakeRoutes'); // Import intakeRoutes
const getMeals = require('../backend/api/routes/getMeals')
const delMeal = require('../backend/api/routes/delMeal')
const last7days = require('../backend/api/routes/last7days')
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// // Mount the intakeRoutes
app.post('/api/intakes', intakeRoutes);
app.get('/api/meals/today', getMeals);
app.delete('/api/intakes/:id', delMeal);
app.get('/api/meals/last7days', last7days)
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

// Default route
app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});
