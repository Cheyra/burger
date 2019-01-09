// set requirement to enable use of orm
var orm = require('../config/orm.js');

//create model for burgers
var burger = {
	all: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},

	new: function(objCol, objData, cb) {
		orm.insert('burgers', objCol, objData, function(res) {
			cb(res);
		});
	},

	devour: function(objCol, objData, conditionCol, conditionData, cb) {
		orm.update('burgers', objCol, objData, conditionCol, conditionData, function(res) {
			cb(res);
		});
	}
};
//export the model 
module.exports = burger;