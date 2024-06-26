// Import the Express module
const express = require('express');
require('dotenv').config() // .evn
const configViewEngine = require('./config/viewEngine')
const app = express(); // Create an instance of an Express application
const webRoutes = require('./routes/web');
// Define the port number where the server will listen for requests
const port = process.env.PORT || 8888 ;  // 8888: nếu undefined server sẽ ko die
const hostname = process.env.HOST_NAME;


// config template engine
configViewEngine(app)

// khai báo route -- get is a method
app.use('/',webRoutes); // sau dấu / để chia version route


// Start the server and have it listen on the specified port
// When the server starts, log a message indicating that it is running
app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
