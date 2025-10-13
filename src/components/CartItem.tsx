"use client"
import { Product } from "@/types";
import RemoveFromCartButton from "./RemoveFromCartButton";
type Props = {
  item: Product, 
  quantity: number,
}

export default function CartItem({item, quantity}: Props){
  const date = new Date();
  const today = new Date(date);
  today.setDate(date.getDate()+7)
  const delivery_day = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
  
  return(
    <div id='product-card'
    className='h-full md:w-3/5 sm:w-full rounded flex flex-row p-3 gap-8 shadow-lg bg-white/70 backdrop-blur-md text-[#3e4a3d]'>
      <img id='product-image'
      src={item.thumbnail || ''} 
      loading='lazy'
      className='w-2xs h-32 rounded lg:h-50 bg-[#00deff]/40'/>
      <div className=" text-left block content-start w-3xs">
        <h2 className=' text-[#00a6fb] text-lg taxt-left font-bold truncate'>{item.title || 'Product Title'}</h2>  
        <p className='text-sm taxt-left text-[#3e4a3d]'>{"Price: ₹"+Math.round(item.price*80) || 'Pricing | Off'}</p>
        <p className='text-sm taxt-left text-[#3e4a3d]'>{"Quantity: "+quantity || '1'}</p>
        <p className='text-sm taxt-left text-[#3e4a3d]'>{"Delivery fee: "+item.deliveryFee || 'Delivery Fee'}</p>

        <p className='text-sm taxt-left text-[#3e4a3d] mb-5'>{delivery_day || 'Delivery Date ...'}</p>
        <RemoveFromCartButton id={item.id || 0}/>
      </div>
    </div>
  )
}

function removeFromCart(){
  // TO DO: remove item from cart
}