const mongoose = require('mongoose');

// Define the schema for the data to be stored in the database
const DataSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  sales: {
    type: Number,
    required: true
  },
  customerEngagement: {
    type: Number,
    required: true
  },
  marketChanges: {
    type: Number,
    required: true
  },
  // Add other business metrics as needed
});

// Define the model based on the schema
const Data = mongoose.model('Data', DataSchema);

// Export the model so it can be used in other parts of the application
module.exports = Data;
