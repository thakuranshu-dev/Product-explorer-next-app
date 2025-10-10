type Props = {
  item: {
    title: string,
    price: number,
    deliveryFee: string,
    thumbnail: string,
    quantity: number,
    deliveryDate: string,
  }
}

export default function CartItem({item}:Props){
  return(
    <div id='product-card'
    className='h-full rounded flex flex-row p-3 gap-4 shadow-lg bg-white/70 backdrop-blur-md text-[#3e4a3d]'>
      <img id='product-image'
      src={item.thumbnail || ''} 
      loading='lazy'
      className='w-full h-32 rounded lg:h-50 bg-[#00deff]/40'/>
      <div className=" text-left block content-start">
        <h2 className=' text-[#00a6fb] text-lg taxt-left font-bold truncate'>{item.title || 'Product Title'}</h2>  
        <p className='text-sm taxt-left text-[#3e4a3d]'>{item.price || 'Pricing | Off'}</p>
        <p className='text-sm taxt-left text-[#3e4a3d]'>{item.quantity || 'Quantity'}</p>
        <p className='text-sm taxt-left text-[#3e4a3d]'>{item.deliveryFee || 'Delivery Fee'}</p>
        <p className='text-sm taxt-left text-[#3e4a3d]'>{item.deliveryDate || 'Delivery Date ...'}</p>
        <button type="button"
        className="mt-3 rounded border-2 border-red-500 text-red-500">
          X Remove
        </button>
      </div>
    </div>
  )
}

function removeFromCart(){
  // TO DO: remove item from cart
}