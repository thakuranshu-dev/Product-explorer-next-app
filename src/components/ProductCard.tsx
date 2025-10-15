import React from 'react'
import { Rating,RatingButton } from "./ui/shadcn-io/rating";
import Image from 'next/image'; 
import { Product } from '@/types';
type Props = {
  item: Product,
  details: boolean,
}
export default function ProductCard({ item, details }: Props) {
  return (
    <div
      id="product-card"
      className="w-full max-w-sm sm:max-w-xs md:max-w-md lg:max-w-lg rounded flex flex-col p-4 gap-2 shadow-lg bg-white/90 backdrop-blur-md text-[#3e4a3d]"
    >
      <div className="relative w-full aspect-[4/3] max-h-100 rounded overflow-hidden bg-gray-200">
        <Image
          id="product-image"
          src={item.thumbnail || ''}
          alt={item.title}
          fill
          className='max-w-[768px]'
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      <div className="text-left">
        <h2 className="text-[#00a6fb] text-base font-bold truncate">
          {item.title || 'Product Title'}
        </h2>
        <p className="text-sm text-[#3e4a3d]">
          ₹{Math.round(item.price) * 80 || 'Pricing | Off'}
        </p>
        <p className="text-sm text-[#3e4a3d]">
          {item.deliveryFee || 'Delivery Fee'}
        </p>
        <div className="inline-flex items-center gap-2 mt-1">
          <Rating defaultValue={Math.floor(item.rating)} readOnly>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton className="text-yellow-500" key={index} />
            ))}
          </Rating>
          <span
            className={`text-sm ${
              item.rating >= 3 ? 'text-green-500' : 'text-red-600'
            }`}
          >
            ({item.rating})
          </span>
        </div>
      </div>
    </div>
  );
}