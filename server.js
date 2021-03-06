// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
// var mysql = require("mysql");

// Sets up the Express app
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

// Logs when app is listening, on server side
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});