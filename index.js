//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
// use mysql
const mysql = require('mysql');
//inisial app express
const app = express();
//set views file
app.set('views', path.join(__dirname, 'views'));
//set view engine
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.json()) // for parsing application/json

//set public folder as static folder for static file
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('install');
});

app.post('/install', (req, res) => {

    const data = req.body;

    const db = mysql.createConnection({
        host: data.db_host,
        user: data.db_user,
        password: data.db_password
    });

    db.connect(function (err) {
        if (err) throw err;
        let sql = "CREATE DATABASE " + data.db_name;
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Database created");
        });
    });



});

app.listen(8000, () => {
    console.log('Server is running at port 8000');
});