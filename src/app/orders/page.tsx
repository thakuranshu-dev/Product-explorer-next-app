import FeedbackForm from "@/components/FeedbackForm"
export default function OrdersPage(){
  return(
    // <h1 className="text-center text-3xl font-bold p-6"
    // > Hello from Orders Page! </h1>
    <div className="p-6 flex flex-row flex-wrap">
      <FeedbackForm />
    </div>
    
  )
}

function OrderCard(){
  return(
    <div className="p-4 w-md h-40 inline-flex gap-3 rounded">
      <img src="" alt="" 
      className="h-full w-38 rounded"/>
      <div className="h-full">
        <h4>Status</h4>
        <p className="text-gray-400ay-">Delivery date</p>
        <p className="text-gray-400ay-">Quantity</p>
        <hr />
        <p className="text-lg text-blue-400">
          Add Feedback
        </p>
      </div>
    </div>
  )
}

function OrderDetails(order_id:string){

}