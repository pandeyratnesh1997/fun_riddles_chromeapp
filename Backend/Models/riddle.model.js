const mongoose = require("mongoose");

const riddleSchema = new mongoose.Schema({
    riddle:{type:String,required:true},
    answer:{type:String,required:true},
    creator:{type:String,required:true},
    creatorId:{type:String,required:true}
})

const riddleModel= mongoose.model("riddle",riddleSchema)
module.exports = riddleModel;