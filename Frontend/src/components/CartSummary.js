import React from 'react'
import { endPoint } from '../utils/endPoint'
import axios from 'axios'
import Razorpay from 'razorpay'
const CartSummary = (props) => {
  let {totalPrice,cartItems}=props
  console.log("---------totalPrice in summary",totalPrice)
  const placeOrder=async()=>{
    let postData={
      amount:totalPrice,
      items:cartItems
    }

    let {data}= await axios.post(`${endPoint}/orders/order`,postData)
    console.log("------------DATA",data)
    let order=data.data 

    var options = {
      key: "rzp_test_91ew5wicy4mmG4", 
    amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Food cafe", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${endPoint}/orders/transactionCheck?razorPay_id=${order.id}&orderId=${order.orderId}`,
      // callback_url: `${endPoint}/orders//transactionCheck`,
      prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          "name": "Gaurav Kumar", //your customer's name
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#3399cc"
      }
  };
 const rzp1 = window.Razorpay(options);
  rzp1.open();
  }






  let name="Nikhl"
  return (
    

<div className="rounded-lg border bg-white p-6 shadow-md">

  <div className='mb-2 flex justify-between'>
      <form  className='mb-2 flex justify-between'>

       
          <label>Name</label>
          <input
            value={name}
            type='text'
          />
      
      </form>

  </div>
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">₹{totalPrice}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">₹4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">₹{Number(totalPrice+4.99).toFixed(2)}</p>
            <p className="text-sm text-gray-700">including Gst</p>
          </div>
        </div>
        <button
         className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
         onClick={()=>placeOrder()}
         >Check out</button>
      </div>
      

  )
}

export default CartSummary
