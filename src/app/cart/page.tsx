"use client"
import { useState } from "react";
import CartItem from "@/components/CartItem";

export default function Cart(){
  const [cart_items, setCart_items] = useState([]);
  return(
    <div className="p-6 flex flex-col justify-center items-center">
      {Array.isArray(cart_items) && cart_items.length>0?
        cart_items.map((item, index)=>(
          <CartItem key={index} item={item} />
        )) :
        <p className="text-center text-2xl font-bold p-6x content-center">
          Your cart is empty. 🤔
        </p>
      }
      <div className="md:w-3/5 bg-white/70 backdrop-blur-md rounded text-[#3e4a3d] sm:w-full ">
        <div className="p-4  flex flex-col">
          <h5 className="font-bold ">Price Details ({5})</h5>
          <div className="inline-flex justify-between w-full">
            <p>Total Product Price</p>
            <p>₹{2000}</p>
          </div>
          <div className="inline-flex justify-between w-full">
            <p>Total Discount</p>
            <p>-₹{150}</p>
          </div>
          <hr />
          <div className="inline-flex justify-between w-full">
            <p>Order Total</p>
            <p>₹{2000}</p>
          </div>
          <p className="px-6 py-2 mt-2 rounded border border-green-400 bg-green-400/30 text-green-500 text-center">
            Yay! Your total discount is ₹{150} 🎉
          </p>
        </div>
          <div className="px-4 pb-4 w-full inline-flex justify-between items-center">
            <p title="Amount payable" className="font-bold text-xl">₹{2000}</p>
            <button type="button" title="Proceed to checkout"
            className="w-35 px-6 py-1.5 rounded border border-blue-500 text-blue-500 bg-blue-400/45 hover:text-white hover:bg-blue-500 focus:text-white focus:bg-blue-500">
              Continue
            </button>
          </div>
      </div>
    </div>
    
  )
}

