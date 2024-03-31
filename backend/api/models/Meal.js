const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now }, // Add date field to the schema with default value
  userId: { type: String, required: true },
  mealType: String,
  foodItem: String,
  foodInfo: Object
}, { collection: 'intakes' }); // Specify custom collection name here

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
