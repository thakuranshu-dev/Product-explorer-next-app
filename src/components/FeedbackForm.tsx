import { Rating,RatingButton } from "./ui/shadcn-io/rating"
export default function FeedbackForm(){
  return(
    <div id="feedback-form"
    className="p-4 w-100 h-80 border border-gray-300 rounded flex flex-col items-center gap-2.5 bg-white/70 backdrop-blur-md text-[#3e4a3d]">
      <span className="p-0 m-0">Rate this product:</span>
      <Rating defaultValue={3}>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingButton className="text-yellow-500 py-0" key={index} size={32 } />
        ))}
      </Rating>
      <span>Any message for us?:</span>
      <textarea className="w-full min-h-30 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
      placeholder="Write anything in your mind..."></textarea>
      <button type="button" title="Submit Feedback"
      className="w-55 px-6 py-1.5 rounded border border-blue-500 text-blue-500 bg-blue-400/45 hover:text-white hover:bg-blue-500 focus:text-white focus:bg-blue-500">
        Submit
      </button>
    </div>
  )
}
// TODO: Show product details for which feedback is being given.