const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yash',
    database: 'ques11db'
});

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// Handling get requests
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/signin.html'));
});

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/signin.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/signup.html'));
});

// Handling post requests
app.post('/signin', (req, res) => {
    con.connect((err) => {
        if (err) throw err;
        let username = req.body.username;
        let password = req.body.password;
        let que = "SELECT * FROM logindata WHERE username = ? and password = ?";
        con.query(que, [username, password], (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log(result);
                if (result.length > 0) {
                    res.sendFile(path.join(__dirname, '/public/welcome.html'));
                } else {
                    res.setHeader('Content-Type', 'text/html');
                    res.write('Invalid username or password');
                }
            }
        });
    });
});

app.post('/signup', (req, res) => {
    con.connect((err) => {
        if (err) throw err;
        let username = req.body.username;
        let password = req.body.password;
        let que = "INSERT INTO logindata (username, password) VALUES (?, ?)";
        con.query(que, [username, password], (err, result) => {
            if (err) {
                throw err;
            } else {
                res.sendFile(path.join(__dirname, '/public/signin.html'));
            }
        });
    });
});

app.listen('3000', () => {
    console.log('Server running at port 3000');
});