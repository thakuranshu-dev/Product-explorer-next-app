export function handleAddToCart(id: number): number[] {
  let favourites: number[] = [];  
  try{
    const storedFavourites = localStorage.getItem('favourites');
    if (storedFavourites) 
      favourites = JSON.parse(storedFavourites);
    if (!favourites.includes(id))
      favourites.push(id);
    else
      favourites.splice(favourites.indexOf(id),1);
    
    localStorage.setItem('favourites', JSON.stringify(favourites));
    return favourites;
  }catch(err){
    console.log('handleAddToCart error:', err)
    return [];
  }
}

export function getCartItems():number[] {
  try{
    let savedFavourites: number[] = [];
    savedFavourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    return Array.isArray(savedFavourites)? savedFavourites : [];
  }catch(err){
    console.log('getCartItems error:', err)
    return [];
  }
}