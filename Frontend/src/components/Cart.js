import React from "react";
import { CDN_URL } from "../utils/constants";

import { useDispatch } from "react-redux";
import { cartSliceActions } from "../Redux/slices/cartSlice";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { clearCart } from "../Redux/slices/cartSlice";
import ItemList from "./ItemList";
import CartItem from "./CartItem";
import CartItem2 from "./CartItem2";
import CartSummary from "./CartSummary";
import { FaCartShopping } from "react-icons/fa6";
const Cart = () => {
  const { items, totalPrice, totalItems } = useSelector((store) => store.cart);
  let cartItems = items;
  const dispatch = useDispatch();

  const handleClearCart = () => {
    // console.log("clear cart running")
    dispatch(clearCart());
  };

  // console.log("-----cartItems-444444444444444-----", cartItems);

  if (cartItems.length == 0) {
    return (
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="text-center">

              <FaCartShopping className="text-center"/>
        </div>
        
        <h1> Your Cart is empty. Add Items to the cart!</h1>
      </div>
    );
  }
  return (
    <div className="w-5/12 flex justify-around flex-col text-center mx-auto">
      <div className="flex flex-col ">
        <div>
          {cartItems.map((item) => (
            <CartItem2
              item={item}
              totalItems={totalItems}
              totalPrice={totalPrice}
            ></CartItem2>
          ))}
        </div>
      
      </div>

      <div className="">
        <CartSummary
          totalItems={totalItems}
          totalPrice={totalPrice}
          cartItems={cartItems}
        ></CartSummary>
      </div>
      {/* <div className="">
          <button
            className=" p-2 m-auto bg-black text-white rounded-lg text-center"
            onClick={() => handleClearCart()}
            // onClick={()=>(console.log("clear cart running"))}
          >
            Clear Cart
          </button>
        </div> */}
    </div>
  );
};

export default Cart;
