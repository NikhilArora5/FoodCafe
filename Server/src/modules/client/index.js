const express=require("express")
const {verifyClient}=require("../../middleware/auth")
const router=express.Router()

const {register,login,}=require("../client/controllers/clientAuth")


router.post("/register", register
)

// router.get("/", verifyClient,getData
// )

// router.post("/upload", upload
// )


router.post("/login",login
)

// router.post("/logout",logout
// )


module.exports=router