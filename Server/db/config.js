const mongooses=require("mongoose")
const dotenv=require("dotenv").config()
const colors=require("colors")

const db_connection =async()=>{
try{
    const conn= await mongooses.connect(process.env.DB_URL)
    console.log(`CONNECTED TO DATABASE ON THE HOST ${conn.connection.host}`.bgMagenta )
}
catch(error){
    console.log(" SOME PROBLEM HAS OCCURED... ".bgCyan)
}
}

module.exports=db_connection;