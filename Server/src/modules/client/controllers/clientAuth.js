
const {hashPassword,genToken,ComparePasswordFunc}=require("../../../utils/authUtils")
const client=require("../../../model/client")
const path = require('path')
const {commonPath}=require("../../../uploads/path")


const register=async(req,res)=>{
    try {
        console.log("-body-",req.body)
    let {email,password,name}=req.body

    if(!email || !password || !name){
       return res.status(400).json({
            status:400,
            message:'Please fill all fields',
            data:{}
        })
    }


    let clientExist= await client.findOne({email})
    console.log("client egister",clientExist)

    if(clientExist){
       return res.status(400).json({
            status:400,
            message:'client with this email already exist',
            data:{}
        })
    }

    let savedPass= await hashPassword(password)

    let clientSaved= await client.create({
        name,
        email,
        password:(savedPass)
    })

    // let token=await genToken(clientSaved._id)

    if(clientSaved && token){
        console.log("client saved")
        return res.status(200).json({
            status:200,
            message:"client created succesfully",
            data:{}
        })

    }
    } catch (error) {
        return res.status(400).json({
            status:400,
            message:error.message,
            data:{}
        })
    }

}


const login=async(req,res)=>{

    /* 
     
      * LOGIN API LEARNING
      * Notes : .lean() is very Imp if not used may change the behaviour
      * clientExist.token=token
      *  {...clientExist,token}  may  not work
      * use try catch to prevent server crash
  */

try {
  let {email,password}=req.body
  
  if(!email || !password){
      return res.status(400).json({
          status:400,
          message:'Please fill all fields',
          data:{}
      })
  }



 
  let clientExist= await client.findOne({email}).lean()

  if(!clientExist){
      return res.status(401).json({
          status:401,
          message:'invalid credentials',
          data:{}
      })

  }



  let isPassTrue=await ComparePasswordFunc(password,clientExist.password)
  
  let token=await genToken(clientExist._id)

  clientExist.password=""

  if(isPassTrue){

      return res.cookie("token",token,{ httpOnly: true}).status(200).json({
          status:200,
          message:'login succesfull',
          data:clientExist
      })

  }else{
      return res.status(401).json({
          status:401,
          message:'incorrect credentials',
          data:{}
      })

  }
} catch (error) {
  return res.status(401).json({
      status:401,
      message:error.message,
      data:{}
  })
  
}

}


module.exports={
    register,login
}