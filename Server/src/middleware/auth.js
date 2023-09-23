const jwt=require("jsonwebtoken")
const user=require("../model/user")
const client=require("../model/client")
const admin=require("../model/admin")
const verifyUser=async(req,res,next)=>{

    try {
        let token=req.cookies.token||req.headers.token
        // console.log("-------------req.cookies",req.cookies)
        let decoded=jwt.verify(token,process.env.JWT_SECRET)

    
    
    let userLogged=await user.findOne({_id:decoded.id},{password:0})
     req.userLogged=userLogged


    if(!userLogged){
        return res.status(401).json({
            message:"validation failed"
            
    })
}
    } catch (error) {

        console.log("------------error.message",error.message)
        return res.status(401).json({
                // message:"validation failed"
                message:error.message
        })
    }
next()
}

const verifyClient=async(req,res,next)=>{

    try {
        let token=req.cookies.token||req.headers.token
        // console.log("-------------req.cookies",req.cookies)
        let decoded=jwt.verify(token,process.env.JWT_SECRET)

    
    
    let clientLogged=await client.findOne({_id:decoded.id},{password:0})
     req.clientLogged=clientLogged


    if(!clientLogged){
        return res.status(401).json({
            message:"validation failed"
            
    })
}
    } catch (error) {

        console.log("------------error.message",error.message)
        return res.status(401).json({
                // message:"validation failed"
                message:error.message
        })
    }
next()
}

const verifyAdmin=async(req,res,next)=>{

    try {
        let token=req.cookies.token||req.headers.token
        // console.log("-------------req.cookies",req.cookies)
        let decoded=jwt.verify(token,process.env.JWT_SECRET)

    
    
    let adminLogged=await admin.findOne({_id:decoded.id},{password:0})
     req.adminLogged=adminLogged


    if(!adminLogged){
        return res.status(401).json({
            message:"validation failed"
            
    })
}
    } catch (error) {

        console.log("------------error.message",error.message)
        return res.status(401).json({
                // message:"validation failed"
                message:error.message
        })
    }
next()
}

module.exports={
    verifyUser,verifyClient,verifyAdmin
}