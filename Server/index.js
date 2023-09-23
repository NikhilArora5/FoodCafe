const express=require("express")
const fileUpload = require("express-fileupload");
var morgan = require('morgan')

const app=express()

const cors=require("cors")
app.use(cors( {origin: "*",credentials: true,}))
const connectDB=require("./config/database")
const cookieParser = require("cookie-parser");
const PORT=8081
require('dotenv').config();
connectDB()
morgan.token('id', function getId (req) {
  return req.id
})
app.use(morgan(':id :method :url :response-time :status'))
 
app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
      createParentPath: true,
    })
  );

  
  
// for req,body
app.use(express.json());
// for req.body url-form-encoded
app.use(express.urlencoded({ extended: true }));

// for cookies
app.use(cookieParser());

const userRouter=require("./src/modules/users/index")
const clientRouter=require("./src/modules/client/index")
const storeRouter=require("./src/modules/store/index")
const userOrders=require("./src/modules/orders/index")


app.use("/user/",userRouter)
app.use("/client/",clientRouter)
app.use("/store/",storeRouter)
app.use("/orders/",userOrders)

app.get("/",(req,res)=>{
  res.send("Hello Deployed")
})

app.listen(PORT,(err)=>{
    if(err){
        console.log("server error")
    }else{

        console.log(`Server Running  ✔️   on http://localhost:${PORT}/`)
    }
})
