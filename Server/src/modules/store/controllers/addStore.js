
const store=require("../../../model/store")


const addStore=async(req,res)=>{

   try {
    let {email,name,address}=req.body

    console.log("BODY",req.body)
    let clientLogged=req.clientLogged

    if(!email || !name|| !address){
        return res.status(400).json({
            status:400,
            message:'Please fill all fields',
            data:{}
        })
    }
    let storeSaved= await store.create({
        name,
        email,
        address,
        clientId:clientLogged._id
    })

    if(storeSaved){
        return res.status(200).json({
            status:200,
            message:'store created succesfully',
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


module.exports={
    addStore
}