import React from 'react'
import { CDN_URL } from '../utils/constants'

import { useDispatch } from 'react-redux'
import { cartSliceActions } from '../Redux/slices/cartSlice'
import { UseSelector } from 'react-redux/es/hooks/useSelector'
import { useState } from 'react'

let {addItem,removeItem,clearCart}=cartSliceActions

const ItemList = (props) => {
  let {item}=props
  const [itemAdded,setItemAdded]=useState(0)

  let dispatch=useDispatch()

   const   handleItem=(item,type)=>{
      // console.log("-Item in add--------",item)

      if(type=="add"){
        setItemAdded(itemAdded+1)
        dispatch(addItem(item))
      }
      else if(type=="remove"){
        setItemAdded(itemAdded-1)
        dispatch(removeItem(item))
      }
    
   }


  return (
    <div className='text-left m-2 border-b-2 border-gray-300 py-6 flex justify-between'>
        <div className='w-10/12 flex  flex-col justify-between my-2 '>
            <div>
            <span className='text-lg mr-2'>{item?.card?.info?.name}</span> 
            <span className='text-lg'>- ₹: {item?.card?.info?.price/100}</span> 
           
            </div>

        <p className='text-sm my-2 text-gray-500'>
        {item?.card?.info?.description}
        </p>
        </div>

       
 
        <div className='w-2/12'>

          {itemAdded? <div className='absolute bg-black text-white  text-sm rounded-md mt-6 flex px-1 py-1 items-center justify-around'>
           <button 
           className='mx-1 '
           onClick={()=>(handleItem(item.card.info,"remove"))}
           
         > -</button>
           <span   className='mx-3' >{itemAdded}</span>
          <button   className='mx-1' onClick={()=>(handleItem(item.card.info,"add"))}> +</button>
        </div>  :
          <button className='absolute bg-black text-white p-1 text-sm rounded-md mt-6'
           
          onClick={()=>(handleItem(item.card.info,"add"))}
        >  Add +</button>
       
        }
          
        <img className=' rounded-md ' src={CDN_URL+item?.card?.info.imageId} alt={item?.card?.info.name+" image"}/>
        </div>
      
    </div>
  )
}

export default ItemList
