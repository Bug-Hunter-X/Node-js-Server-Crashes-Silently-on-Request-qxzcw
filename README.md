# Node.js Server Crash Bug

This repository demonstrates a subtle bug in a Node.js HTTP server that crashes silently upon receiving a request. The server starts without issue, but terminates abruptly when a client sends a request.  No error messages or stack traces are provided, making debugging challenging.

## Bug Description

A seemingly innocuous omission in the request handler causes the server to crash without any clear indication of the cause.  This highlights the importance of robust error handling and logging in Node.js applications.

## How to Reproduce

1. Clone this repository.
2. Run `node server.js`.
3. Send a request to `http://localhost:3000` using a tool like `curl` or your browser.
4. Observe that the server crashes without an error message.  (Check your process list, the Node.js process will have disappeared.)

## Solution

The `serverSolution.js` file provides a corrected version of the server, demonstrating how to prevent this type of silent crash.  The core issue is proper handling of response, even in the case of no intended output.