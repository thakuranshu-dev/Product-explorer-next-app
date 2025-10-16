import React from 'react'
import { Rating, RatingButton } from './ui/shadcn-io/rating'
type props = {
  review: {reviewerName: string, comment: string, rating: number, date: string},
}

export default function ReviewCard({review}: props) {
  const isoDate = review.date;
  const local = new Date(isoDate).toLocaleString('en-IN', {
  timeZone: 'Asia/Kolkata',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});
console.log(local);
  return (
    <div>
      <h2 className="text-[#00a6fb] text-lg font-bold truncate">
        {review.reviewerName || 'User'}
      </h2>
      <div className="inline-flex items-center gap-2 mt-1">
        <span className='text-base'>Rated: </span>
        <Rating defaultValue={Math.floor(review.rating)} readOnly>
          {Array.from({ length: 5 }).map((_, index) => (
            <RatingButton className="text-yellow-500" key={index} />
          ))}
        </Rating>
      </div>
      <p className="text-base text-[#3e4a3d]">
        Comment: {review.comment}
      </p>
      <p className="text-xs text-[#3e4a3d]">
        {local}
      </p>
      <hr className='w-md mt-1 bg-gray-400'></hr>
    </div>
  )
}
