require('dotenv').config();
//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');

//inisial app express
const app = express();
// set port
const port = process.env.PORT || 8000;

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

// All routes
const install = require('./routes/install');

app.use('/install', install);

app.get('/', (req, res) => {
    console.log(process.env)
});

app.listen(port, () => {
    console.log('Server is running at port ' + port);
});