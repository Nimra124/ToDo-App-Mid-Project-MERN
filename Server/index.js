const express = require('express');
const dbConnection = require('./db/config');
const dotenv = require('dotenv')
const cors = require('cors')
const User = require("./db/User")
const Signup=require("./db/Signup")
const app = express();
app.use(express.json());
dbConnection();
dotenv.config();
app.use(cors());


app.post("/item",async(req,res)=>{
     let user=new User(req.body);
    
        let result= await user.save();
            res.send(result);
      

})


app.post("/user",async(req,res)=>{
    let user=new Signup(req.body);
   
       let result= await user.save();
           res.send(result);
           console.log(" empty")
     

})


app.get("/getuser",async(req,res)=>{
    let result = await Signup.find();
        res.send(result);
    
    })



app.get("/getitem",async(req,res)=>{
let result = await User.find();

    res.send(result);

})

app.delete("/delete/:id",async(req,res)=>{
    let result= await User.deleteOne({_id: req.params.id})
    if(result)
    {
        res.send(result)
    }
  
})


app.get("/updateitem/:id",async(req,res)=>{
    let result=await User.findOne({_id: req.params.id})
    if(result)
    {
        res.send(result);
    }
   
})

app.put("/putitem/:id",async(req,res)=>{
    let result=await User.updateOne(
        {_id:req.params.id},
        {$set: req.body}
    )
    if(result)
    {
        res.send(result)
    }
       

    

})

app.get("/updateuser/:id",async(req,res)=>{
    let result=await Signup.findOne({_id: req.params.id})
    res.send(result);
})

app.put("/putuser/:id",async(req,res)=>{
    let result=await Signup.updateOne(
        {_id:req.params.id},
        {$set: req.body}
    )
        res.send(result)

    

})



const Port = process.env.port || 8000
app.listen(Port,()=>{
    console.log("SERVER IS STARTED IN",process.env.App_mode,"MODE ON PORT :", Port)
})