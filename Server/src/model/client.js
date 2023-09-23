const mongoose=require("mongoose")
const Schema=mongoose.Schema

const client=mongoose.Schema({


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
    about:{
        type:String,
        // required:true
    },
    stores:[
       {
         storeId:{
            type:Schema.Types.ObjectId,
            ref:"store"
        }
    }
    ],
    isDeleted:{
        type:Boolean,
        default:false
    },
},{

    timestamps:true
})


module.exports=mongoose.model("client",client)
