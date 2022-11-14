let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer(function (req, res) {
    console.log(req.url);
    fs.readFile('./index.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
    });

    fs.readFile('./styles.css', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/css'})
        res.write(data);
    })

    res.end();
}).listen(3000);