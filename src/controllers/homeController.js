const connection = require('../config/database') 
const { getAllUsers } = require('../services/CRUDService');

const getHomepage = async(req, res) => {
    let results = await getAllUsers();
    return  res.render("home.ejs" , {listUsers: results})
}

const getABC = (req, res) => {
    res.render("sample.ejs")
}

const getCreatePage = (req, res) => {
    res.render("create.ejs")
}
 
const postCreateUser =  async (req, res) => {
    let email = req.body.email;
    let myName = req.body.name;
    let city = req.body.city;
    // let {email, myName, city} = req.body

    // ----------CALL BACK ----------
    // connection.query(  // truyền động giá trị
    //     `INSERT INTO Users (email , name , city )VALUES (?, ?, ?)`, [email , myName , city],
    //     function (err, results) {
    //       console.log(results);
    //       res.send('Create user successfully')
    //     }
    //   );
        
    //---------ASYNC / AWAIT----------
    let [results,fields] = await  connection.query(  // truyền động giá trị
        `INSERT INTO Users (email , name , city ) VALUES (?, ?, ?)`,[email , myName , city],
      );
      console.log(">>> Check Result :" ,results);
      res.send('Create user successfully')
    // const [results , fields] = await connection.query('SELECT * FROM Users u');
}

const getUpdatePage = (req, res) => {
    res.render("edit.ejs")

}



module.exports = {
    getHomepage , getABC , postCreateUser ,getCreatePage , getUpdatePage
}