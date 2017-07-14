"use strict";

var express = require('express'); // import express
var exphbs  = require('express-handlebars'); // import handlebars
var routes = require('../routes/routes'); // import main routes
var adminRoutes = require('../routes/adminRoutes'); // import admin routes

// set up express server
var app = express();

// set up handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// set up access to styles in public folder
var path = require("path");
app.use(express.static(path.join(__dirname, '../public')));

// set up bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// import main routes
app.use('/', routes);
app.use('/admin', adminRoutes);

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
