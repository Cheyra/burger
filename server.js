//require all dependancies
var express = require("express");
 var bodyParser = require("body-parser");
 var methodOverride = require("method-override");
// Sets up the Express App
var app = express();


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

// sets up Express app to utilize handlebars 
app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// sets up static directory
app.use(express.static('./public'));

 // requires controllers for us
require("./controllers/burgers_controllers.js")(app);

// allows server to port or if no port indicated uses port 3000
app.set('port', process.env.PORT || 3000);

// listens for connection
app.listen(app.get('port'), () => {
    console.log(`Express app listening on ${app.get('port')}`);
});