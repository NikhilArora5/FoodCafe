import axios from "axios";
import { endPoint } from "../utils/endPoint";

export const userLogin=async(data)=>{

    try {
        console.log("  API data  ",data)
        let res=await axios.post(`${endPoint}/user/login`,data)
       
        if(res) return res.data
       
    } catch (error) {
        // console.log("--------ERROR-RES",error)
        // console.log("-----------error",error.response.data.message)

        return error.response.data
    }
   
}

export const userLogout=async(data)=>{

    try {
        console.log("  API data  ",data)
        let res=await axios.post(`${endPoint}/user/logout`,data)
       
        if(res) return res.data
       
    } catch (error) {
        // console.log("--------ERROR-RES",error)
        // console.log("-----------error",error.response.data.message)

        return error.response.data
    }
   
}