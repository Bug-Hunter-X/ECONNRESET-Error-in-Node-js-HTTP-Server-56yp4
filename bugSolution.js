const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  // ...
  req.socket.on('close', () => {
    console.log('Connection closed by client');
  });
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});