// request statements
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// import the mongoose from db.js file
const {mongoose} = require('./db.js');


var employeeController = require('./controllers/employeeController.js');

// call the express function inside the app variable

var app = express();
// for json use we use bodyparse

app.use(bodyParser.json());


app.use(cors({ origin: 'http://localhost:4200' }));
// to start the express server  we usee app.listen
app.listen(3000, () => console.log('Server started at port : 3000'));

// base url of emplyooe in controller
app.use('/employees', employeeController);