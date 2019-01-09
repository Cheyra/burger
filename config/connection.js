//require access to mysql
var mysql = require("mysql");

//set up variable connection to sql database
var connection = mysql.createConnection({
    
    host: "localhost",
    user: "root",
    password: "Mango1988",
    database: "burgers_db"
})

//connection to burgers_db database
connection.connect(function(err){
    if (err) {
        console.error("error connection:" + err.stack);
        return;
    }
    console.log("connected");
});

//set an export to make available 
module.exports = connection