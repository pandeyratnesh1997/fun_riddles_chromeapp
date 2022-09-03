const jwt = require("jsonwebtoken");
require("dotenv").config();
const authenticate = (req, res, next) => {
    const user_token = req.headers.authorization?.split(" ")[1];
    console.log("user_token", user_token)
        if(!user_token){
            return res.send("Please login again");
        }
    jwt.verify(user_token,process.env.secretKey, (err, decode) => {
      if (err) {
        return res.send("jwt error");
      }
      console.log(decode)
      req.body.email= decode.email;
      
      next();
    });
  };

module.exports = authenticate