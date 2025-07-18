const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Serve static files from the out directory
app.use(express.static(path.join(__dirname, 'out')));

// Handle all routes by serving index.html (SPA routing)
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'out', 'index.html');
  
  // Check if index.html exists
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Page not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('SPA routing enabled - all routes will serve index.html');
}); 