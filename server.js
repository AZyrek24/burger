var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();





app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});