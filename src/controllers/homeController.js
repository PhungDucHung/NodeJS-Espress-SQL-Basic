const connection = require('../config/database') 


const getHomepage = (req, res) => {
    return  res.render("home.ejs")
}

const getABC = (req, res) => {
    res.render("sample.ejs")
}
 
const postCreateUser = (req, res) => {
    let email = req.body.email;
    let myName = req.body.name;
    let city = req.body.city;
    // let {email, myName, city} = req.body

    connection.query(
        `INSERT INTO Users (email , name , city )
        VALUES (?, ?, ?)`,
        [email , myName , city],
        function (err, results) {
          console.log(results);
          res.end('Create user successfully')
        }
      );
}

module.exports = {
    getHomepage , getABC , postCreateUser
}