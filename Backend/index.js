const express = require("express");
const connection = require("./Config/database_config")
const cors = require('cors')
require("dotenv").config();





const app = express();

app.use(cors());


app.use(express.json());
//route Controller
const riddleRoute = require("./Controller/riddle.controller");
const userRoute = require("./Controller/user.controller")

app.get("/",(req,res)=>{
    res.send("riddlesapi")
})

app.use("/user",userRoute)
app.use("/riddle",riddleRoute);

app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log("Database connected successfully at port", process.env.PORT)
    } catch (error) {
        console.log("unable to make connection with Database")
    }
})