import  {LOGO_URL}  from "../utils/constants"
import { useState ,useEffect} from "react"
import { Link } from "react-router-dom"
import useOnlineStaus from "../utils/customHooks/useOnlineStatus"

import userContext from "../utils/context/userContext"

import { useContext } from "react"
import {  useSelector } from "react-redux/es/hooks/useSelector"
import { userLogout } from "../Api/auth"
import { useNavigate } from "react-router-dom"
import { clearCart } from "../Redux/slices/cartSlice"
import { useDispatch } from "react-redux"
import { clearCart } from "../Redux/slices/cartSlice"

// common classes
let li="mx-4"


const Header=()=>{
  let dispatch=useDispatch()
  let navigate=useNavigate()

    const [loginBtn,setLoginBtn]=useState("Login")
    const {loggedInUser,isLoggedIn,setIsLoggedIn,}=useContext(userContext)

    
const {items,totalPrice,totalItems}=useSelector((store)=>(store.cart))
let cartItems=items

    



useEffect(()=>{
  // console.log("----useffect called after header------------")
},[loginBtn])



    const onlineStatus=useOnlineStaus()
    const auth=async()=>{
        let resData=await userLogout  ()
        console.log("----------Logout 2222---",resData)
        console.log("status--",resData.status)
      if(resData.status==200){

        console.log("updating after logout")

        navigate("/login")
        dispatch(clearCart())
        setIsLoggedIn(false)
        
      }
        


    }
    return ( 
    
    <div className="header flex bg-pink-50 px-8 py-6 items-start justify-between">
  
      <div className="logo-container flex items-center justify-evenly">
      <img className="logo w-[150px] rounded-lg" src= {LOGO_URL}/>
      </div>
  
      <div className="nav-items text-lg mt-4">
          <ul className="flex items-center justify-evenly">

            <li>Online Status :{onlineStatus?"✔️":"🔴"}</li>
              <li className={li}><Link to={"/"} >Home</Link> </li>
              {/* <li className={li}>  Restaurants  </li> */}
              <li className={li}> <Link to={"/about"}>About us</Link> </li>
              <li className={li}> <Link to={"/contact"}>Contact</Link> </li>
              {/* <li className={li}> <Link to={"/grocery"}>Grocery</Link> </li> */}
           
              <li  className= "font-bold mx-1">  <Link to={"/cart"}>Cart({totalItems})</Link></li>
              {isLoggedIn?<li  className={li}>{loggedInUser}</li>:""}
              <button className="login-Btn" 
              onClick={()=>(isLoggedIn?auth():null)}>
                <Link to={isLoggedIn?"/":"/login"}> {isLoggedIn?"Logout":"Login"}</Link>
               
                
                </button>
          </ul>
      </div>
  
      </div>)
  }

  
  export default Header