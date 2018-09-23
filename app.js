//main server entry point

const express = require('express'); //bring in Express.JS
const path = require('path'); //didn't install it with dependencies as it's core module
//pass incoming request(e.g. form)
const bodyParser = require('body-parser');
//middleware allowing req to api from diff domain name
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

//initialize the app variable with express
const app = express();

//variable for port
const port = 3000;

//to use cors middleware
app.use(cors());

//enable body parser middleware
app.use(bodyParser.json());

//create a route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
})

//start up server
app.listen(port, () => {
	console.log('Server started on port: '+ port);
});