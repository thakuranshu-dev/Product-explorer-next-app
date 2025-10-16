import { Product, Category, ProductDetail } from "@/types";

export async function fetchProducts():Promise<Product[]>{
  const resp = await fetch('https://dummyjson.com/products');
  if(!resp.ok){
    throw new Error('Unable to fetch products');
  }
  const data = await resp.json();
  return(data.products);
}

export async function fetchCategoryList():Promise<string[]>{
  try {
    const resp = await fetch('https://dummyjson.com/products/categories');
    const data = await resp.json();
    return (data.map((item: Category) => item.slug));
  } catch (error) {
    console.error('Unable to fetch category list:', error);
    return [];
  }
}
export async function searchProduct(kw:string):Promise<Product[]>{
  const resp = await fetch(`https://dummyjson.com/products/search?q=${kw}`);
  if(!resp.ok)
    throw new Error('Unable to fetch products');
  const data = await resp.json();
  return(data.products);
}
export async function fetchByCategory(kw:string):Promise<Product[]>{
  const resp = await fetch(`https://dummyjson.com/products/category/${kw}`);
  if(!resp.ok)
    throw new Error('Unable to fetch products');
  const data = await resp.json();
  return(data.products);
}

export async function fetchProductById(id:string):Promise<ProductDetail | null>{
  try{
    const resp = await fetch(`https://dummyjson.com/products/${id}`);
    if(!resp.ok)
      return null;
    const data = await resp.json();
    
    return(data);
  }catch(error){
    console.error('Unable to fetch product by id:', error);
    return null;
  }
}