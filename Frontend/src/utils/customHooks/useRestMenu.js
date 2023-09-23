import React from "react";
import { useEffect,useState } from "react";
import { MENU_API } from "../constants";

const useRestMenu=(resID)=>{
    const [resInfo,setResInfo]=useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{

        let data=await fetch(MENU_API+resID)
        if(data){
        let json =await data.json()
        setResInfo(json.data)
        }
    }


    return resInfo

}

export default useRestMenu