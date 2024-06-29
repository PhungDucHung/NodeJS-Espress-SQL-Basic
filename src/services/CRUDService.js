const connection = require("../config/database")  

const getAllUsers = async() => {
    let [results , fields] = await connection.query('select * from Users');
    return results
}

const getUserById = async(userId) => {
    let [results , fields] = await connection.query('select * from Users where id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const updateUserById = async(email , myName , city , userId) => {
   //---------ASYNC / AWAIT----------
   let [results,fields] = await  connection.query(  // truyền động giá trị
    `UPDATE users 
     SET email = ?,name=? , City= ?
     WHERE id = ?
    `,[email , myName , city , userId],
  );
}

module.exports = {
    getAllUsers , getUserById , updateUserById
}