const userModel = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const userRoute = express.Router();

userRoute.post("/signup", async (req, res) => {
    const { email, password, age } = req.body;
     let exist = await userModel.findOne({email});

     console.log(email,exist)
     if(exist){
      return res.send("Email alrady exist")
     }
    await bcrypt.hash(password, 8, (err, hash) => {
      if (err) {
        return res.send("err in hashing");
      }
      const user = new userModel({
        email,
        password: hash,
        age,
      });
  
      user.save();
      return res.send("registerd");
    });
  });
  
  userRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({email});
  
    if (!user) {
      return res.send("invalid credential");
    }
    const hashPassword = user.password;
    console.log(hashPassword)
    await bcrypt.compare(password, hashPassword, (err, result) => {
      if (err) {
        return res.send("Invalid crendential");
      }
      if (result) {
        const token = jwt.sign(
          { email: user.email, age: user.age, _id: user._id },
          "very_secret",
          { expiresIn: "1h" }
        );
        return res.send({massage:"loginSuccessfull",token:token,id:user._id})
      }else{
        return res.send("invalid credential");
      }
    });
  
  });

 

module.exports =userRoute;