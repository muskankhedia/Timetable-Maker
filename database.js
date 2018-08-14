var mysql = require("mysql");

//set connection to database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Timetable_Maker"
});

var tablename= "3S";
module.exports = {
  tablename : tablename,
  connection : con
}
