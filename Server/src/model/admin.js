const mongoose=require("mongoose")
const Schema=mongoose.Schema
const admin=mongoose.Schema({


    name:{
        type:String,
        required:true
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
})

