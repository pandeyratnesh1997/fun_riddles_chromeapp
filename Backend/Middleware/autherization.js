const userModel = require("../Models/user.model");

const autherization = (permitedRoll) => {
   return async (req, res, next) => {
    let email = req.body.email;
    console.log(permitedRoll);
    const user = await userModel.findOne({ email });
    console.log('user:', user)
    if (!permitedRoll.includes(user.role)) {
      return res.status(403).send("access denied");
    }
    next();
  };
};

module.exports = autherization;
