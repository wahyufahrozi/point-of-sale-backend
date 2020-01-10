const mysql = require("mysql");

//create database connection
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

//connect to database
conn.connect(err => {
  if (err) {
    console.log("Database Error : ");
    console.log(err);
  } else {
    console.log("Mysql Connected...");
  }
});

module.exports = conn;
