var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password : 'Sanjani03',
  database: "burgers_db"
});
 // creating the connection. 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});
//exporting the connection. 
module.exports = connection;