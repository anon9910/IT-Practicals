const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // Write a response to client
    res.write('Hello World\n');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running at port 3000');
});
