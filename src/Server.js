// Import the Express module
const express = require('express');
const path = require('path');
// Create an instance of an Express application
const app = express();
// Define the port number where the server will listen for requests
const port = 3000;

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// khai báo route -- get is a method
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/abc', (req, res) => {
  // res.send('<h1> Hello Michael! </h1>');
  res.render("sample.ejs")
});


// Start the server and have it listen on the specified port
// When the server starts, log a message indicating that it is running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
