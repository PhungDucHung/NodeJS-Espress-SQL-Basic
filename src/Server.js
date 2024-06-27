// Import the Express module
const express = require('express');
require('dotenv').config() // .evn
const configViewEngine = require('./config/viewEngine')
const app = express(); // Create an instance of an Express application
const webRoutes = require('./routes/web');
const mysql = require('mysql2');
// Define the port number where the server will listen for requests
const port = process.env.PORT || 8888 ;  // 8888: nếu undefined server sẽ ko die
const hostname = process.env.HOST_NAME;


// config template engine
configViewEngine(app)

// khai báo route -- get is a method
app.use('/',webRoutes); // sau dấu / để chia version route

//test connection
// Create the connection to database

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'nodeJs',
});

connection.query(
  'select * from users u ',
  function (err, results, fields) {
    console.log(">>> results = ",results); // results contains rows returned by server
    console.log(">>> fields = ",fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
