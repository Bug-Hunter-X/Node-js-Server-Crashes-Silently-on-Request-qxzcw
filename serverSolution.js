const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'}); // Add response headers
  res.end('Hello, world!'); // Send a response
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});