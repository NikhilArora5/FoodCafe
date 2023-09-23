import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../utils/constants'
import Shimmer from './Shimmer'

import useRestMenu from '../utils/customHooks/useRestMenu'
import RestaurantCategory from './RestaurantCategory'
const RestaurantMenu = () => {
  let {resId} =useParams() 
  
  // getting resINfo from custom HOOK
  let resInfo=useRestMenu(resId)

  const [showIndex,setShowIndex]=useState(0)

  console.log('------------showIndexStat',showIndex)


  if (resInfo==null || resInfo.length==0) return <Shimmer></Shimmer>
  // console.log("resInfo",resInfo)
  let {name,cuisines,avgRating,cloudinaryImageId,costForTwo,isOpen}=resInfo?.cards[0]?.card?.card?.info
  let {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

  // console.log('------rest Details------------',resInfo?.cards[0]?.card?.card?.info)
  // console.log("itemCards-----------",itemCards)
  console.log("All type cards",resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)


  const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e)=>(
    e.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ))

  console.log("-----------categories",categories)



  return (

<div className='text-center'>
        <h1 className='text-2xl font-bold mt-6 mb-4 '>{name}</h1>
        <h3 className='text-lg font-bold text-gray-600'> Cost For Two RS:{costForTwo/100}</h3>

        {categories.map((category,index)=>{

          return  <div>

                <RestaurantCategory 
                key={category?.card?.card.title} 
                data={category?.card?.card} 
                
                showItems={index==showIndex?true:false} 

                setShowIndex={(index)=>setShowIndex(index)}

                showIndex={showIndex}

                currentIndex={index}
                
                >


                </RestaurantCategory>

          </div>
        })}
</div>


   
  )

  }
export default RestaurantMenu
