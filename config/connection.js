//Challenge level REQUIRED/ENTRY
const inquirer = require("inquirer");
const mysql = require("mysql");
// connects to mysql
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Majesty88",
  port: 3306,
  database: "burger"
});
// if connection fails, error prompt
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;