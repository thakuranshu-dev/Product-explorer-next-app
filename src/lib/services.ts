import { Product } from "@/types";
export function handleAddToCart(product: Product): Product[] {
  let favourites: Product[] = [];  
  try{
    const storedFavourites = localStorage.getItem('favourites');
    if (storedFavourites) 
      favourites = JSON.parse(storedFavourites);
    const id = product.id;
    const index = favourites.findIndex((item) => item.id === id);
    if (index === -1)
      favourites.push(product);
    else
      favourites.splice(index, 1);
    // if (!favourites.includes(id))
    //   favourites.push(id);
    // else
    //   favourites.splice(favourites.indexOf(id),1);
    
    localStorage.setItem('favourites', JSON.stringify(favourites));
    return favourites;
  }catch(err){
    console.log('handleAddToCart error:', err)
    return [];
  }
}

export function getCartItems():Product[] {
  try{
    let savedFavourites: Product[] = [];
    savedFavourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    return Array.isArray(savedFavourites)? savedFavourites : [];
  }catch(err){
    console.log('getCartItems error:', err)
    return [];
  }
}

export function removeFromCart(id: number){
  const cart_items = getCartItems();
  const index = cart_items.findIndex((item) => item.id === id);
  cart_items.splice(index, 1);
    
  localStorage.setItem('favourites', JSON.stringify(cart_items));
}