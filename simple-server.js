const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = 3000;

// MIME types for different file extensions
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  
  // Remove trailing slash except for root
  if (pathname !== '/' && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }
  
  // Try to serve the file directly first
  let filePath = path.join(__dirname, 'out', pathname);
  
  // If it's a directory, try index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  
  // If the specific file doesn't exist, try adding .html extension
  if (!fs.existsSync(filePath) && !pathname.includes('.')) {
    const htmlPath = path.join(__dirname, 'out', pathname + '.html');
    if (fs.existsSync(htmlPath)) {
      filePath = htmlPath;
    }
  }
  
  // If file still doesn't exist, serve index.html for SPA routing
  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, 'out', 'index.html');
  }
  
  // Get file extension
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  
  // Read and serve the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
      return;
    }
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Static file serving enabled - serving specific files when available');
}); 