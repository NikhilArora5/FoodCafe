import ItemList from "./ItemList"
import { useState } from "react"


function RestaurantCategory(props){

    // console.log("-props",props)

  
    const handleAccorion=()=>{
      if(currentIndex==showIndex){
        setShowIndex(null)
      }else{
        setShowIndex(currentIndex)
      }
     
     console.log("----------indexes",{showIndex,currentIndex})
    }
    let {data,showItems,setShowIndex,currentIndex,showIndex}=props
    // console.log("setShowIndex",setShowIndex)
    // console.log("----------indexes",{showIndex,currentIndex})
    return <>
        <div className="mt-2 w-1/2  mx-auto bg-gray-50 flex flex-col justify-between p-4 my-4 shadow-lg cursor-pointer">
          <div className="flex justify-between mb-2" onClick={handleAccorion}>
            <span className="font-bold text-lg text-gray-800">{data.title} ({data.itemCards.length})</span>
            <span>{showItems? "🔼":"🔽"}</span>
          </div>
          {/* {Accordion Body} */}

          {data.itemCards.map((item)=>{
            return <div>
             {showItems?<ItemList key={item.card.info.id} item={item}></ItemList>:<></>} 
            </div>
          })}


        </div>
    </>
}


export default RestaurantCategory