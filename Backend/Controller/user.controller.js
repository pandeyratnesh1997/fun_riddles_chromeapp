const userModel = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const userRoute = express.Router();
require('dotenv').config();

userRoute.post("/signup", async (req, res) => {
    const { email, password, name, role } = req.body;
     let exist = await userModel.findOne({email});

    //  console.log(email,exist)
     if(exist){
      return res.status(409).send("Email alrady exist")
     }
    await bcrypt.hash(password, 8, (err, hash) => {
      if (err) {
        return res.send("err in hashing");
      }
      const user = new userModel({
        email,
        password: hash,
        name,
        role
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
    // console.log(hashPassword)
    await bcrypt.compare(password, hashPassword, (err, result) => {
      if (err) {
        return res.send("Invalid crendential");
      }
      if (result) {
        const token = jwt.sign(
          { email: user.email, name: user.name, _id: user._id, role: user.role },
          process.env.secretKey,
          { expiresIn: "1h" }
        );

        const infoToSave = {
          email: user.email,
          name: user.name,
        }
        return res.send({massage:"loginSuccessfull",token:token,id:user._id,user:infoToSave})
      }else{
        return res.send("invalid credential");
      }
    });
  
  });

 

module.exports =userRoute;