"use client"
import { getCartItems, handleAddToCart } from "@/lib/services"
import { useEffect, useState, } from "react"

export default function AddToCart({id}: {id: number}){
  const [cartItems, setCartItems] = useState<number[]>([]);

  useEffect(()=>{
    try{
      setCartItems(getCartItems);
    }catch(err){console.error(err)}
  },[])

  const handleClick = ()=>{
    try{
      const updated = handleAddToCart(id);
      setCartItems(updated);
    }
    catch(e){console.log(e)}
  };

  return (
    <>
      <button type="button"
      onClick={()=>handleClick()}
      className={`px-4 py-2 w-45 outline-none bg-white rounded border ${cartItems.includes(id)? "text-red-500 border-red-500 font-semibold hover:bg-red-500 hover:text-white" : "text-[#29fd53] border-[#29fd53] hover:bg-[#29fd53] hover:text-white"} transition`}>
        {!cartItems.includes(id)?"Add to cart":"Remove from cart"}
      </button>
    </>
  )
}
