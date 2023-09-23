import React from "react"
import RestaurantCard from "./RestaurantCard"


const RestaurantCardPromoted=(RestaurantCard)=>(

    (props)=>{

           return(
            
           <> 
          <label  className="text-white bg-gray-500 rounded-md py-1 px-2 absolute m-0 ml-8 mt-4">100% Veg</label>
           <RestaurantCard {...props}></RestaurantCard> 
      </>
               
                           
            
            
           )
   }


)

export default RestaurantCardPromoted