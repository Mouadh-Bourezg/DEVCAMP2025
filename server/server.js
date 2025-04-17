// server.js
require('dotenv').config(); // Load environment variables (install with: npm install dotenv)
const express = require('express');
const cors = require('cors'); // Enable CORS (install with: npm install cors)

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 4000; // Use environment variable or default to 5000

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Node.js/Express server is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});