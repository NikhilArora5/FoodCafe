const express=require("express")
const { verifyClient } = require("../../middleware/auth")
const {addStore,}=require("./controllers/addStore")
const {addProduct,getProduct,delProduct,editProduct}=require("./controllers/productSer")
const router=express.Router()


router.post("/addStore",verifyClient, addStore)




// product rutes
router.post("/addProduct",verifyClient, addProduct)
router.get("/getProduct",verifyClient, getProduct)
router.post("/editProduct",verifyClient, editProduct)
router.put("/delProduct",verifyClient, delProduct)






module.exports=router