# ECONNRESET Error in Node.js HTTP Server

This repository demonstrates a common error in Node.js HTTP servers: the `ECONNRESET` error. This error occurs when a client abruptly closes the connection before the server has finished processing the request. 

The `bug.js` file shows a basic HTTP server that doesn't handle the `ECONNRESET` error. The `bugSolution.js` file shows a solution using the `close` event on the socket.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Use a tool like `curl` or a browser to make a request to the server (e.g., `curl http://localhost:3000`).
4. Interrupt the connection before the server responds (e.g., using Ctrl+C in the terminal where you started `curl`).

You will see the `ECONNRESET` error in the console.  Run `node bugSolution.js` to see the improved version.