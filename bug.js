const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  // ...
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Unexpected error: ECONNRESET
// It can be caused by an abrupt connection closure by the client.
// One way to handle is by using the 'close' event on the socket.