const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000; // You can choose any available port

// Middleware to parse JSON
app.use(cors());

// Serve JSON data
app.get('/api/users', (req, res) => {
  // Read data from the JSON file
  const data = require('./data.json');
  res.json(data.users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
