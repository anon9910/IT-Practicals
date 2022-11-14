let mysql = require('mysql2');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello');
// }).listen(8080);

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yash"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Conected");
});

function textFun() {
    console.log("Passed");
}