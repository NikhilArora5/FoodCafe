const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

 exports.hashPassword=async(password)=>{

    const genSalt=await bcrypt.genSalt(Number(process.env.BCRYPT_SALT)||10)

    const hash=await bcrypt.hash(password,genSalt)
    console.log("hash gen",hash)
    return hash
}


exports.genToken=async(id)=>{
    let token=await jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"1d"
    })

    return token

}



exports.ComparePasswordFunc = async (password = "", encyptedPassword = "") => {
    return await bcrypt.compare(password, encyptedPassword);
  };
  
exports.RandomPasswordFunc = () => {
    return require("crypto").randomBytes(5).toString("hex");
  };