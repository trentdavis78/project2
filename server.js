var express = require("express");

var app = express();
var PORT = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static('public')); 

app.get("/", function(req, res) {
    // Handlebars requires an object to be sent to the dog handlebars file.
    // Lucky for us, animals[0] is an object!
  
    // 1. send the dog object from the animals array to the dog handlebars file.
    res.render("index");
  }); 

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });