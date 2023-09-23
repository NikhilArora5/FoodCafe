const mongoose=require("mongoose")


const connectDB=async()=>{

    try {
        let connection=await mongoose.connect(process.env.MONGO_URI)
        // console.log("ENV VAR",process.env.MONGO_URI)

        console.log("DATABASE CONNECTED ✔️      HOST:",connection.connection.host)
    } catch (error) {

        console.log("----ERROR CONNECTING DB-----",error.message)
        
    }
   
}


module.exports=connectDB