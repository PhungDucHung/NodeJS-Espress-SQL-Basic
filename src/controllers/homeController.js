const connection = require('../config/database') 


const getHomepage = (req, res) => {
    // process data
    // call , model
    // simple query
connection.query(
    'select * from users u ',
    function (err, results, fields) {
        users = results;
        console.log(">>> results = ",results); // results contains rows returned by server
        res.send(JSON.stringify(users)); // Câu lệnh này sẽ tự động chuyển đổi đối tượng JavaScript thành JSON
            // res.send(users); 

     }
  );
}

const getABC = (req, res) => {
    res.render("sample.ejs")
}
 
module.exports = {
    getHomepage , getABC
}