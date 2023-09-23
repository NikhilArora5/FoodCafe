const mongoose=require("mongoose")
const Schema=mongoose.Schema
const store=mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    email:{

        type:String,
        required:true,
        unique:false
    },
   
   
    clientId: {
        type: Schema.Types.ObjectId,
        ref: "client",
      },
    address:{
        type:String,
        required:true,

    },
    pincode:{
        type:String,
        // required:true,
        default:""

    },
    about:{
        type:String,
        // required:true,
        default:""

    },

    timings:{
        type:Date,
        // required:true,
    },

    isDelivery:{
        type:Boolean,
        default:false
    },

    isVeg:{
        type:Boolean,
        default:false
    }

},{

    timestamps:true
})


module.exports=mongoose.model("store",store)
