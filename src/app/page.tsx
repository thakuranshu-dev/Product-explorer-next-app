import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { fetchProducts } from "@/lib/api";

type Product = {
  id: number,
  title: string,
  price: number,
  rating: number,
  thumbnail: string,
  deliveryFee: string,
}

export const revalidate = 60;
export default async function Home() {
  let products: Product[] = [];
  try{
    products = await fetchProducts();
  }catch(error){
    console.error(error);
  }

  return (
    <div className="font-sans w-full flex flex-row flex-wrap items-center justify-items-start min-h-screen pb-20 gap-4 sm:p-20 sm:items-start m-0 p-0">
      {Array.isArray(products) && products.length>0 ?
      products.map((product, idx)=>(
        <div key={idx}
        className="flex-grow basis-full sm:basis-1/3 lg:basis-1/4 lg:h-80 p-2">
        <Link href={`/products/${product.id}`} key={idx}>
          <ProductCard item={product}/>
        </Link>
        </div>
      )): <p>No Products Found! 👻</p>
      }
    </div>
  );
}
        