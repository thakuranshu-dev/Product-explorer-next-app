import React from 'react'
import { Rating,RatingButton } from "./ui/shadcn-io/rating";
import { Product } from '@/types';
type Props = {
  item: Product,
  details: boolean,
}
export default function ProductCard({item, details}: Props) {
  return (
    <div id='product-card'
    className='h-full rounded flex flex-col p-3 gap-1 shadow-lg bg-white/70 backdrop-blur-md text-[#3e4a3d]'>
      <img id='product-image'
      src={item.thumbnail || ''} 
      loading='lazy'
      className='w-full min-h-2/3 rounded lg:h-50 bg-[#00deff]/40'/>
      <div className=" text-left block content-start">
        <h2 className=' text-[#00a6fb] text-sm taxt-left font-bold truncate'>{item.title || 'Product Title'}</h2> 
        <p className={`text-sm taxt-left text-[#3e4a3d] line-clamp-2 ${!details ? "hidden" : "visible"}`}>{item.description || 'Product Description'}</p> 
        <p className='text-sm taxt-left text-[#3e4a3d]'>${item.price || 'Pricing | Off'}</p>
        <p className='text-sm taxt-left text-[#3e4a3d]'>{item.deliveryFee || 'Delivery Fee'}</p>
        <div className="inline-flex items-center gap-1">
          <Rating defaultValue={Math.floor(item.rating)} readOnly>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton className="text-yellow-500 py-0" key={index}/>
            ))}
          </Rating>
          <span className={`text-sm ${item.rating>=3?'text-green-500': 'text-red-600'}`}>
            {`(${item.rating})`}
          </span>
        </div>
      </div>
    </div>
  )
}

{/* <button className="mt-4 px-4 py-2 bg-[#29fd53] text-white rounded hover:bg-[#00deff] transition">
      Learn More
    </button> */}