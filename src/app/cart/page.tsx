"use client"
import { useEffect, useState, useMemo } from "react";
import CartItem from "@/components/CartItem";
import { getCartItems } from "@/lib/services";
import { Product } from "@/types";

export default function Cart(){
  const [cart_items, setCart_items] = useState<Product[]>([]);
  // const [total_price, setTotal_price] = useState<number>(0);

  useEffect(()=>{
    setCart_items(getCartItems());
  },[]);

  const total_price = useMemo(
    () => (Array.isArray(cart_items) ? cart_items.reduce((sum, item) => sum + (item.price || 0), 0) : 0),
    [cart_items]
  );

  return(
    <div className="p-6 flex flex-col gap-4 justify-center items-center pb-20">
      {Array.isArray(cart_items) && cart_items.length>0?
        cart_items.map((item, index)=>(
          <CartItem key={index} item={item} quantity={1} />
        )) :
        <p className="text-center text-2xl font-bold p-6x content-center">
          Your cart is empty. 🤔
        </p>
      }
      <div className="md:w-3/5 bg-white/70 backdrop-blur-md rounded text-[#3e4a3d] sm:w-full ">
        <div className="p-4  flex flex-col">
          <h5 className="font-bold ">Price Details ({cart_items.length})</h5>
          <div className="inline-flex justify-between w-full">
            <p>Total Product Price</p>
            <p>₹{Math.round(total_price*80)}</p>
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

