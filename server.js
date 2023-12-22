const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const path = require('path');

const app = express();

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/ai-enhanced-react-dashboard', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.use('/api/data', require('./routes/api/data'));
app.use('/api/predictiveModel', require('./routes/api/predictiveModel'));
app.use('/api/nlpModel', require('./routes/api/nlpModel'));
app.use('/api/anomalyDetection', require('./routes/api/anomalyDetection'));
app.use('/api/userBehaviorAnalytics', require('./routes/api/userBehaviorAnalytics'));
app.use('/api/integration', require('./routes/api/integration'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
