const Razorpay=require("razorpay")
 const razorPay_instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY, key_secret:process.env.RAZORPAY_SECRET })


 module.exports={
    razorPay_instance
 }