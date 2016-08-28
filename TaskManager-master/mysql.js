
var mysql      = require('mysql');
var connection = mysql.createConnection({
  database : 'granfrontend_work',
  host     : 'localhost',
  user     : 'root',
  password : ''
});
module.exports = connection;
