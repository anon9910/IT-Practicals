// Import the in-built http module
const http = require('http');

// Creating a server
// This callback function will be called when browser
// makes a request to the server
const server = http.createServer((req, res) => {
    // Set the status code to 200 (All OK)
    res.statusCode = 200;
    // Set the type of content returned to be of text/html
    res.setHeader('Content-Type', 'text/html');
    // Write the response to the client
    res.write('Hello world, This is my Node.js server\n');
    // End the response
    res.end();
});

// Set the server to listen to port 10000
server.listen(10000, () => {
    console.log('Server is running at port 10000');
});
