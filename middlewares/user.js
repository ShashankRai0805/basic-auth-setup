const { User } = require("../db");

function checkUser(req, res, next){
    const password = req.headers.password;
    const email = req.headers.email;

    User.findOne({
        email: email,
        password: password
    })
    .then(function(value){
        if(value){
            next();
        } else {
            res.status(401).json({
                msg: "User not found"
            })
        }
    })
}

module.exports = checkUser;