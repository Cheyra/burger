//require burger model
var burger = require("../models/burger")
//export controllers
module.exports = function(app) {
	// set up get request to render burgers
	app.get('/', function(req, res) {
		burger.all(function(data) {
			res.render("index", {
				burgers: data
			});
		});
	});
// set up post request to create new burger
	app.post('/', function(req, res) {
		burger.new('burger_name', req.body.burger, function(data) {
			res.redirect('/');
			console.log(req.body.burger);
		});
	});
// set up put request to modify existing burger data
	app.put('/', function(req, res) {
		burger.devour('devoured', 1, 'id', req.body.id, function(data) {
			res.redirect('/');
		});
	});
};
