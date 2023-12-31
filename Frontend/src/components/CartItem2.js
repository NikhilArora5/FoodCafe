import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, clearCart, removeItem } from "../Redux/slices/cartSlice";

const CartItem2 = (props) => {
  let dispatch = useDispatch();
  let { item } = props;
  let ItemPrice = item?.price ? item?.price / 100 : item?.defaultPrice / 100;
  console.log("------------CAR ITEM", item);

  return (
    <div className="rounded-lg">
      <div className=" justify-between mb-4 rounded-lg bg-white p-2 shadow-md sm:flex sm:justify-start">
        <img
          src={CDN_URL + item?.imageId}
          alt="product-image"
          className="w-16 rounded-lg "
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="font-bold  text-sm text-gray-900">{item?.name}</h2>
            {/* <p className="mt-1 text-xs text-gray-700">36EU - 4US</p> */}
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <span
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                onClick={() => dispatch(removeItem(item))}
              >
                {" "}
                -{" "}
              </span>
              <input
                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="number"
                value={item.qty}
                min="1"
              />
              <span
                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                onClick={() => dispatch(addItem(item))}
              >
                {" "}
                +{" "}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-xs">₹: {(ItemPrice * item.qty).toFixed(2)}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem2;
