const mongoose=require("mongoose")

const Schema=mongoose.Schema

const Product=Schema({

    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    isAvailable:{
        type:Boolean,
        // required:true
        default:false
    },
    isVeg:{
        type:Boolean,
        default:false
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    desc:{
        type:String,
        // required:true,
        default:""
    },
    storeId:{
        type:Schema.Types.ObjectId,
        ref:"store"
    },
    productImg:{
        type:String,
        // required:true,
        default:""
    }

},{
    timestamps:true
})

module.exports=mongoose.model("product",Product)