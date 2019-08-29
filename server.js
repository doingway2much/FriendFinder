// Require Express and Path
var express = require('express');
var path = require('path');

// Set port for the App
var PORT = process.env.PORT || 8080;

// Set varible for Express
var app = express();

//  Allow Express to render JSON and what not
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Statit links for CCS and images
app.use(express.static('app/public'));
app.use(express.static('app/img'));

// Require javascript files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Start App and listen for the port specified
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});