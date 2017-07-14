"use strict";

var express = require('express'); // import express
var exphbs  = require('express-handlebars'); // import handlebars
var routes = require('../routes/routes'); // import main routes

// set up express server
var app = express();

// initialize handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// import main routes
app.use('/', routes);

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
