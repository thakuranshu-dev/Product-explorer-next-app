import React from 'react'
import Image from 'next/image';
import { Rating, RatingButton } from './ui/shadcn-io/rating';
import { ProductDetail } from '@/types';
import AddToCartButton from './FavouriteButton';

type props = {
  props: ProductDetail,
}

export default function ProductDetailCard({ props }: props) {
  console.log(props);
  return (
    <div
      id="product-card"
      className="w-full rounded flex flex-col lg:flex-col p-4 lg:px-10 gap-4 shadow-lg bg-white/90 backdrop-blur-md text-[#3e4a3d]"
    >
      <div
        id="product-image"
        className="relative w-full aspect-video rounded overflow-hidden bg-gray-200">
        
        <Image
          src={props.images[0] || props.images}
          alt={props.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="text-[#00a6fb] text-xl font-bold truncate">
            {props.title || 'Product Title'}
          </h2>
          <p className="text-[#3e4a3d] py-2 line-clamp-2">
            {props.description || 'Product Description'}
          </p>
          <p className="text-[#3e4a3d] py-1 text-lg font-semibold">
            ₹{Math.round(props.price)*80 || 'Pricing | Off'}
          </p>
          <p className="text-sm text-[#3e4a3d] py-1">
            {props.deliveryFee || 'Delivery Fee'}
          </p>
          <div className="inline-flex items-center gap-2 mt-2">
            <Rating defaultValue={Math.floor(props.rating)} readOnly>
              {Array.from({ length: 5 }).map((_, index) => (
                <RatingButton className="text-yellow-500" key={index} />
              ))}
            </Rating>
            <span
              className={`text-sm ${
                props.rating >= 3 ? 'text-green-500' : 'text-red-600'
              }`}
            >
              ({props.rating})
            </span>
          </div>
        </div>

        <div className="mt-6 w-full flex flex-row gap-3">
          <AddToCartButton product={props} />
          <button className="w-40 px-4 py-2 bg-[#29fd53] text-white rounded hover:bg-[#00deff] transition-all">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
