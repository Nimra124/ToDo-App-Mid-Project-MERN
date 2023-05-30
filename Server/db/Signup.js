const mongooses=require("mongoose")

const UserDetails=mongooses.Schema({
    name:String,
    address:String,
    email:String,
    password:String
})

module.exports=mongooses.model("signup",UserDetails);
