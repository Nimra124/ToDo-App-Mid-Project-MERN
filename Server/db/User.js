const mongooses=require("mongoose")

const UserDetails=mongooses.Schema({
    name:String,
    quantity:Number,
    completed:Boolean
})

module.exports=mongooses.model("user",UserDetails);
