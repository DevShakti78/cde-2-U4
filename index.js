// console.log("shakti")
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connect = ()=>{
    return mongoose.connect(
        "mongodb+srv://shakti:shakti@cluster0.ucufg.mongodb.net/web14?retryWrites=true&w=majority"
    );
}



// User
//     - firstName (required)
//     - middleName (optional)
//     - lastName (required)
//     - age (required)
//     - email (required )
//     - address ( required )
//     - gender ( optional and should default to Female )
//     - type (optional and it can take value of customer or employee and if not provided then default to customer )
//     - createdAt (required)
//     - updatedAt (required)
const userSchema = new mongoose.Schema({
    first_name: {type: String,required:true},
    last_name: {type: String,required:true},
    age: {type: Number,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    gender: {type: String,required:false,default:"female"},
    type:{type:String,required:false},
    createdAt:{type:Number,required:true},
    updatedAt:{type:Number,required:true},
})

const User = mongoose.model("user",userSchema);
app.get("/users",async(req,res)=>{
    try {
        const user = await User.find().lean().exec();
        return res.send(users)
    } catch (error) {
        return res.send(error.message)
    }
})


app.listen(5565,function(){
console.log("listening on port 2345")
})