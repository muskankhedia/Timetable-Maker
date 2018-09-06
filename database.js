var mysql = require("mysql");

//set connection to database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Khedia@123",
  database: "Timetable_Maker"
});

var tablename= "ALL_SEM";
var tablename1= "SUBJECT_LIST";
module.exports = {
  tablename : tablename,
  tablename1 : tablename1,
  connection : con
}
