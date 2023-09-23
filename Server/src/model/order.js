const mongoose=require("mongoose")
const Schema=mongoose.Schema
const order=mongoose.Schema({

    
        items:{
            type:Array,
            required:true,
        },

        amount:{
            type:Number,

        },
        transaction:{
            type:Object
        },
        isPaid:{

            type:Boolean,
            default:false
        }
      

},{
    timestamps:true
})


module.exports=mongoose.model("order",order)