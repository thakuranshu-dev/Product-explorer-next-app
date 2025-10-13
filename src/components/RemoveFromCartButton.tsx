import { getCartItems, removeFromCart } from "../lib/services";
export default function RemoveFromCartButton({id}: {id: number}){
  const handleClick = (id: number): void => {
    const cart_items = getCartItems();
    const index = cart_items.findIndex((item) => item.id === id);
    cart_items.splice(index, 1);

    removeFromCart(id);
  }
  return(
    <button type="button"
    onClick={()=>handleClick(id)}
    className="px-4 py-2 w-40 cursor-pointer outline-none bg-white/70 rounded border text-red-500 border-red-500 font-semibold hover:bg-red-500 hover:text-white active:bg-red-300 transition-all duration-300">
      X Remove
    </button>
  );
}