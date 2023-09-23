import React from 'react'
import { CDN_URL } from '../utils/constants'

import { useDispatch } from 'react-redux'
import { cartSliceActions } from '../Redux/slices/cartSlice'
import { UseSelector } from 'react-redux/es/hooks/useSelector'
import { useState } from 'react'

let {addItem,removeItem,clearCart}=cartSliceActions
import { useState } from 'react'
import { CDN_URL } from '../utils/constants'
const CartItem = (props) => {

    let {item}=props
    console.log("------------CAR ITEM",item)
    const [itemAdded,setItemAdded]=useState(0)
    return (
        <div className='text-left m-2 border-b-2 border-gray-300 py-6 flex justify-between'>
            <div className='w-10/12 flex  flex-col justify-between my-2 '>
                <div>
                <span className='mr-2'>{item?.name}</span> 
                <span className=''>- ₹: {item?.price?item?.price/100:item?.defaultPrice/100}</span> 
               
                </div>
            </div>
    
           
     
            <div className='w-1/12'>
    
              {/* {itemAdded? <div className='absolute bg-black text-white  text-sm rounded-md mt-6 flex px-1 py-1 items-center justify-around'>
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
           
            } */}
              
            <img  className='w-[20px] rounded-md ' src={CDN_URL+item?.imageId} alt={item?.card?.info.name+" image"}/>
            </div>
          
        </div>
      )
}

export default CartItem
