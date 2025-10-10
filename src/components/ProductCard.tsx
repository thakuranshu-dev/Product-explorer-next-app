import React from 'react'
import { Rating,RatingButton } from "./ui/shadcn-io/rating";
type Props = {
  item: {
    title: string,
    price: number,
    deliveryFee: string,
    rating: number,
    thumbnail: string,
  }
}
export default function ProductCard({item}: Props) {
  return (
    <div id='product-card'
    className='h-full rounded flex flex-col p-3 gap-1 shadow-lg bg-white/70 backdrop-blur-md text-[#3e4a3d]'>
      <img id='product-image'
      src={item.thumbnail || ''} 
      loading='lazy'
      className='w-full h-32 rounded lg:h-50 bg-[#00deff]/40'/>
      <div className=" text-left block content-start">
        <p className=' text-[#00a6fb] text-sm taxt-left font-bold truncate'>{item.title || 'Product Title'}</p>  
        <p className='text-sm taxt-left text-[#3e4a3d]'>{item.price || 'Pricing | Off'}</p>
        <p className='text-sm taxt-left text-[#3e4a3d]'>{item.deliveryFee || 'Delivery Fee'}</p>
        {/* <p className='text-sm taxt-left text-[#3e4a3d]'>{item.rating || 'Ratings ...'}</p> */}
        <div className="">
          <Rating defaultValue={3} readOnly>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton className="text-yellow-500 py-0" key={index}/>
            ))}
        </Rating>
        </div>
      </div>
    </div>
  )
}

{/* <button className="mt-4 px-4 py-2 bg-[#29fd53] text-white rounded hover:bg-[#00deff] transition">
      Learn More
    </button> */}