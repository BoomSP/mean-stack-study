//main server entry point

const express = require('express'); //bring in Express.JS
const path = require('path'); //didn't install it with dependencies as it's core module
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

//initialize the app with express
const app = express();

//variable for port
const port = 3000;

app.listen(port, () => {
	console.log('Server started on port: '+ port);
});