const mongoose = require('mongoose');

const intakeSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  calories: { type: Number, required: true },
  // Add more fields as needed
});

module.exports = mongoose.model('Intake', intakeSchema);
