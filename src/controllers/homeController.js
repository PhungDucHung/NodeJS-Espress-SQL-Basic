const connection = require('../config/database') 
const { getAllUsers , getUserById , updateUserById ,deleteUserById } = require('../services/CRUDService');

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
      res.send('Create user successfully')
    // const [results , fields] = await connection.query('SELECT * FROM Users u');
}

const getUpdatePage = async(req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render("edit.ejs" , { userEdit : user });
}

const postUpdateUser =  async (req, res) => {
    let email = req.body.email;
    let myName = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    // let {email, myName, city} = req.body
    await updateUserById(email , myName , city , userId)
    res.redirect('/');
    //   res.send('Updated user successfully')
    // const [results , fields] = await connection.query('SELECT * FROM Users u');
}

const postDeleteUser = async (req , res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render("delete.ejs" , { userEdit : user });
};

const postHandleRemoveUser = async (req , res) => {
    const id = req.body.userId;
    await deleteUserById(id);
      res.redirect('/');
    }

module.exports = {
    getHomepage , getABC , postCreateUser ,getCreatePage , getUpdatePage ,postUpdateUser , postDeleteUser , postHandleRemoveUser
}