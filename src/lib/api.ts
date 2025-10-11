import { Product, Category } from "@/types";

export async function fetchProducts():Promise<Product[]>{
  const resp = await fetch('https://dummyjson.com/products');
  if(!resp.ok){
    throw new Error('Unable to fetch products');
  }
  const data = await resp.json();
  return(data.products);
}

export async function fetchCategoryList():Promise<Category[]>{
  try {
    const resp = await fetch('https://dummyjson.com/products/categories');
    const data = await resp.json();
    return (data.map((item: any) => item.slug));
  } catch (error) {
    console.error('Unable to fetch category list:', error);
  }
  return [];
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
