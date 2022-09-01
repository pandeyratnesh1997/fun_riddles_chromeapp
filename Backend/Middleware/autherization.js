const userModel = require("../Models/user.model");

const autherization = (permitedRoll) => {
   return async (req, res, next) => {
    let email = req.body.email;
    
    const user = await userModel.findOne({ email });
    if (!permitedRoll.includes(user.role)) {
      return res.send("access denied");
    }

    next();
  };
};

module.exports = autherization;
