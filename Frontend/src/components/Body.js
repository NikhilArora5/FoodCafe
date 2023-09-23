import RestaurantCard from "./RestaurantCard"
import { resList } from "../utils/mockData"
import { useContext, useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStaus from "../utils/customHooks/useOnlineStatus"
import RestaurantCardPromoted from "./RestaurantCardPromoted"
import userContext from "../utils/context/userContext"

let RestaurantCardPromoted2=RestaurantCardPromoted(RestaurantCard)


// let spacing="mx-6 "
let btn="bg-green-200 py-2 px-4 rounded-md cursor-pointer"



const Body=()=>{

  useEffect(()=>{
   
    fetchData()

  },[])


  const [restArray,setRestArray]=useState([])
  const [filteredRestData,setFilteredRestData]=useState([])
  const [searchText,setSearchText]=useState("")


  

  const fetchData=async()=>{
     let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6790976&lng=76.84398709999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json=await data.json()
      console.log("----------Response---",json?.data?.cards.length)
      // console.log("----------Response---",json?.data?.cards[2])
    console.log("Json--------------------",json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    let listData=json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
   if(listData) {
    setRestArray(listData)
    setFilteredRestData(listData)
  }

    }


   const {loggedInUser,setUserName}=useContext(userContext) 



  const Arr=useState(resList)
 


// THIS IS KNOWN AS CONDITIONAL REDERING


const onlineStatus=useOnlineStaus()

if(!onlineStatus){

  return <h1>Looks like you are offline please internet connection !!</h1>
}

    return restArray.length==0?<Shimmer/>:(
        <div className="body bg-[#F5F5F5]"  >
         <div className="ml-6 flex  items-center py-4" >
        



           <input className="ml-4 p-2"
          type="text"
          placeholder="Search Restaurant"
          onChange={(e)=>(    setSearchText(e.target.value))}
          value={searchText}
          />

         <button className="bg-blue-300 p-2 px-4 rounded-md cursor-pointer " onClick={()=>{

          let filteredRest=restArray.filter((rest)=>(rest.info.name.toLowerCase().includes(searchText.toLowerCase())))

          setFilteredRestData(filteredRest)

         }} >Search</button>

      <button 
      // className={spacing}
      className="bg-green-200 p-2 px-4 rounded-md cursor-pointer mx-2"
         
         onClick={()=>{
          console.log("resList Earl",resList.length)
          let filteredRest=restArray.filter((rest)=>(rest.info.avgRating > 4) )


          // setRestArray(filteredRest)
          setFilteredRestData(filteredRest)

          console.log("resList",resList.length)

          
         }} >
          Top Rated Restaurants</button>
         </div>



         <input className="ml-4 p-2"
          type="text"
          placeholder="Context Name"
          onChange={(e)=>(   setUserName(e.target.value) )}
          value={loggedInUser}
          />




         <div className="res-container flex flex-wrap items-center ">

          {filteredRestData.map((rest)=>(
            
           <Link to={`/restaurants/${rest.info.id}`} key={rest.info.id}> 

           
           {rest.info.veg?   <RestaurantCardPromoted2  resData={rest.info} />: <RestaurantCard resData={rest.info} /> }
        
          


            </Link> 
           
          )
          
          )}
           
        
         </div>
        </div>
    )
}


export default Body