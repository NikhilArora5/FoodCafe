const mongoose=require("mongoose")
const Schema=mongoose.Schema
const User=mongoose.Schema({

    
        name:{
            type:String,
            required:true,
        },
        email:{

            type:String,
            required:true,
            unique:false
        },
        password:{
            type:String,
            required:true
        },
        isDeleted:{
            type:Boolean,
            default:false
        },

},{
    timestamps:true
})


module.exports=mongoose.model("user",User)