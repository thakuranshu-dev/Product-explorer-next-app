interface Product {
  id: number,
  title: string,
  price: number,
  rating: number,
  thumbnail: string,
  deliveryFee: string,
}

export async function fetchProducts():Promise<Product[]>{
  const resp = await fetch('https://dummyjson.com/products');
  if(!resp.ok){
    throw new Error('Unable to fetch products');
  }
  const data = await resp.json();
  return(data.products);
}

export async function fetchCategoryList():Promise<void | any[] | null>{
  try {
    const resp = await fetch('https://dummyjson.com/products/categories');
    const data = await resp.json();
    return(data.products);
  } catch (error) {
    console.error('Unable to fetch category list:', error);
  }
}
export async function searchProduct(kw:string):Promise<void | any[] | null>{
  try {
    const resp = await fetch(`https://dummyjson.com/products/search?q=${kw}`);
    const data = await resp.json();
    return(data.products);
  } catch (error) {
    console.error(`Unable to fetch products matching keyword ${kw}:`, error);
  }
}
export async function fetchByCategory(kw:string):Promise<void | any[] | null>{
  try {
    const resp = await fetch(`https://dummyjson.com/products/category/${kw}`);
    const data = await resp.json();
    return(data.products);
  } catch (error) {
    console.error(`Unable to fetch products of category ${kw}:`, error);
  }
}
