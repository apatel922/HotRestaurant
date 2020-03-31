// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  
require(".api.js")(app);

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "/HTML/reservations.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "/HTML/tables.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/HTML/home.html"));
});
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
