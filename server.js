// dependencies
var express = require("express");
var path = require("path");

// Set up express
var app = express();
var PORT = process.env.PORT || 8080;

// express data parsing
app.use(express.static('app/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener
app.listen(PORT, function(){
    console.log("Listening on Port: " + PORT);
});