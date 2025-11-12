const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from Node.js CI Demo!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.post('/api/users', (req, res) => {
  const { name } = req.body;
  res.json({ 
    message: 'User created',
    user: { id: 1, name }
  });
});

// Helper function for testing
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// Start server only if not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Export for testing
module.exports = { app, add, multiply };