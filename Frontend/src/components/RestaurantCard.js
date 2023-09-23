import {CDN_URL} from "../utils/constants"
import { Link } from "react-router-dom"


const RestaurantCard=(props)=>{
    // const {name,cuisine,rating}=props
    // console.log("Props-------------",props)
    const {resData}=props
        return (
        <div className="w-[250px] h-[400px] m-4 p-4 "  > 
            <img 
            className="res-logo w-[260px] h-[200px] rounded-lg"
            alt="res-logo"
            src={CDN_URL+resData.cloudinaryImageId} />
            <h2 className="text-lg text-gray-800 font-bold" >{resData.name}</h2>
            <h4 className="text-gray-700">{resData.avgRatingString}</h4>
             <h4 className="text-gray-500">{resData.cuisines.join(",")}</h4>
             
             <h4 className="text-gray-500">{resData.costForTwo}</h4>
             <h4 className="text-gray-500"> DeliveryTime:{resData.sla.slaString }</h4>
            



        </div>
    )
}





export const RestaurantCardPromoted=(RestaurantCard)=>(

     ()=>{

            return(

                <RestaurantCard></RestaurantCard>
            )
    }


)

export default RestaurantCard