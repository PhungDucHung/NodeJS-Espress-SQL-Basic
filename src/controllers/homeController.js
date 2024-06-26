const getHomepage = (req, res) => {
    // process data
    // call , model
    res.send('hello mình là wibu')
}

const getABC = (req, res) => {
    res.render("sample.ejs")
}
 
module.exports = {
    getHomepage , getABC
}