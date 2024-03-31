// Import necessary modules
const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal'); // Assuming you have a Meal model defined

// Define a route to delete a specific food item
router.delete('/api/intakes/:id', async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body; // Get user ID from the request body

    try {
        // Find the meal by ID and user ID
        const meal = await Meal.findOne({ _id: id, userId });

        // Check if the meal exists
        if (!meal) {
            return res.status(404).json({ message: 'Meal not found or unauthorized' });
        }

        // Delete the meal
        await meal.deleteOne();
        res.status(200).json({ message: 'Food item deleted successfully' });
    } catch (error) {
        console.error('Error deleting food item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
