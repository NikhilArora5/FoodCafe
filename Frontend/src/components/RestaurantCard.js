import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { FaStar ,FaMotorcycle} from "react-icons/fa6";
const RestaurantCard = (props) => {
  // const {name,cuisine,rating}=props
  // console.log("Props-------------",props)
  const { resData } = props;
  return (
    <div className="w-[250px] h-[400px] m-4 p-4 ">
      <img
        className="res-logo w-[260px] h-[200px] rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <h2 className="text-lg text-gray-800 font-bold">{resData.name}</h2>
      <div className="flex items-center">
        <span className=" bg-green-800 p-1 rounded-full mr-2">

        <FaStar className="text-white"/>
        </span>
     
      <h4 className="text-gray-700">{resData.avgRatingString}</h4>
      </div>
    
      <h4 className="text-gray-500">{resData.cuisines.length<5?resData.cuisines.join(","):resData.cuisines[0]}</h4>

      <h4 className="text-gray-500">{resData.costForTwo}</h4>
      <div className="flex items-center">
        <span className="mr-2 text-xl text-gray-600">

        <FaMotorcycle/>
        </span>
     
        <h4 className="text-gray-500"> :{resData.sla.slaString}</h4>
      </div>
     
    </div>
  );
};

export const RestaurantCardPromoted = (RestaurantCard) => () => {
  return <RestaurantCard></RestaurantCard>;
};

export default RestaurantCard;
