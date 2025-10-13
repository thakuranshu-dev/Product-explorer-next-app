"use client"
import { getCartItems, handleAddToCart } from "@/lib/services"
import { useEffect, useState, } from "react"
import { Product } from "@/types";

export default function AddToCartButton({product}: {product: Product}){
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(()=>{
    try{
      setCartItems(getCartItems);
    }catch(err){console.error(err)}
  },[])

  const isInCart = (id: number) => {
    const index = cartItems.findIndex((item) => item.id === id);
    return index !== -1;
  }

  const handleClick = (product: Product)=>{
    try{
      const updated = handleAddToCart(product);
      setCartItems(updated);
    }
    catch(e){console.log(e)}
  };

  return (
    <>
      <button type="button"
      onClick={()=>handleClick(product)}
      className={`px-4 py-2 w-45 outline-none bg-white rounded border ${isInCart(product.id)? "text-red-500 border-red-500 font-semibold hover:bg-red-500 hover:text-white" : "text-[#29fd53] border-[#29fd53] hover:bg-[#29fd53] hover:text-white"} transition`}>
        {!isInCart(product.id)?"Add to cart":"Remove from cart"}
      </button>
    </>
  )
}
