
const product=require("../../../model/product")
const store=require("../../../model/store")


const addProduct=async(req,res)=>{

   try {
    let {name, price,storeId}=req.body

    console.log("BODY",req.body)
    let clientLogged=req.clientLogged
    if(!name || !storeId|| !price){
        return res.status(400).json({
            status:400,
            message:'Please fill required fields',
            data:{}
        })
    }
   
    let storeExists=store.findOne({_id:storeId})

    if(!storeExists){
        return res.status(400).json({
            status:400,
            message:'No such store Exist',
            data:{}
        })
    }
   
    let productSaved= await product.create({
        name, price,storeId
    })

    if(productSaved){
        return res.status(200).json({
            status:200,
            message:'product created succesfully',
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
const editProduct=async(req,res)=>{

   try {
    let {storeId,prodId}=req.body

    let changes=req.body

    console.log("BODY",req.body)
    let clientLogged=req.clientLogged
    if(!storeId ){
        return res.status(400).json({
            status:400,
            message:'Please fill required fields',
            data:{}
        })
    }
   
    let storeExists=await store.findOne({_id:storeId})
    // console.log("storeExist",storeExists)
    if(!storeExists){
        console.log("storeExist check")
        return res.status(400).json({
            status:400,
            message:'No such store Exist',
            data:{}
        })
    }
    console.log("storeExist check22")
    let productSaved= await product.findOneAndUpdate({_id:prodId },changes)
    console.log("storeExist check33",productSaved)
    if(productSaved){
        console.log("storeExist check4444")
        return res.status(200).json({
            status:200,
            message:'product updated succesfully',
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
const getProduct=async(req,res)=>{

   try {
    let {storeId}=req.body

    console.log("BODY",req.body)
    let clientLogged=req.clientLogged
    if(!storeId){
        return res.status(400).json({
            status:400,
            message:'Please fill required fields',
            data:{}
        })
    }
   
    let storeExists=store.findOne({_id:storeId})

    if(!storeExists){
        return res.status(400).json({
            status:400,
            message:'No such store Exist',
            data:{}
        })
    }
   
    let productS= await product.find({storeId:storeId})

    if(productS){
        return res.status(200).json({
            status:200,
            message:'products fetched succesfully',
            data:productS
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
const delProduct=async(req,res)=>{

   try {
    let {storeId,prodId}=req.body

    console.log("BODY",req.body)
    let clientLogged=req.clientLogged
    if(!storeId){
        return res.status(400).json({
            status:400,
            message:'Please fill required fields',
            data:{}
        })
    }
   
    let storeExists=store.findOne({_id:storeId})

    if(!storeExists){
        return res.status(400).json({
            status:400,
            message:'No such store Exist',
            data:{}
        })
    }
   
   let del= await product.findByIdAndUpdate({_id:prodId},{isDeleted:true})

    if(del){
        return res.status(200).json({
            status:200,
            message:'product deleted succesfully',
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
    addProduct,getProduct,delProduct,editProduct
}