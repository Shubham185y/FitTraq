// Import necessary modules
const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal'); // Assuming you have a Meal model defined
const app = express();

// Define a route to delete a specific food item
router.delete('/api/intakes/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await Meal.findByIdAndDelete(id);
      res.status(200).json({ message: 'Food item deleted successfully' });
    } catch (error) {
      console.error('Error deleting food item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
