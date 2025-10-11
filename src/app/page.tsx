"use client";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";
import Link from 'next/link';
import { fetchProducts, searchProduct, fetchByCategory } from "@/lib/api";
import { Product } from "@/types";
import {useEffect, useState } from "react";

// export const revalidate = 60;
export default function Home() {
  const [searchKW, setSearchKW] = useState<string>('');
  const [categoryKW, setCategoryKW] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    let mounted = true;
    async function loadProducts(): Promise<void>{
      setLoading(true);
      try{
        if(categoryKW === '')
          setProducts(await fetchProducts());
        else
          setProducts(await fetchByCategory(categoryKW));
      }
      catch(err){console.error(err)}
      finally{if(mounted) setLoading(false)}
    };
    loadProducts();
    return ()=>{mounted=false}
  },[categoryKW]);
  
  useEffect(()=>{
    const id = setTimeout(()=>{
        const kw = searchKW.trim();
        (async ()=>{
          setLoading(true);
        try{
          setProducts(await searchProduct(kw));
        }
        catch(err){console.error(err)}
        finally{setLoading(false)}
      })();
      }, 300);
      return ()=>clearTimeout(id);
  },[searchKW]);

  return (
    <>
    <div className="w-full h-12 px-10 py-1.5 bg-white/80 backdrop-blur-md inline-flex items-center justify-between ">
      <h1 className="text-3xl font-bold text-green-400">Product Explorer</h1>
      <FilterBar setKW={setCategoryKW}/>
      <SearchBar setKW={setSearchKW}/>
    </div>
    <div className="font-sans w-full flex flex-row flex-wrap items-center justify-items-start min-h-screen pb-20 gap-4 sm:p-20 sm:items-start m-0 p-0">
      {loading ? <p>Loading...</p> :
      Array.isArray(products) && products.length>0 ?
      products.map((product)=>(
        <div key={product.id}
        className="flex-grow basis-full sm:basis-1/3 sm:flex-grow-none lg:basis-1/4 lg:h-80 p-2">
          <Link href={`/products/${product.id}`} key={product.id}>
            <ProductCard item={product} details={false}/>
          </Link>
        </div>
      )): <p>No Products Found! 👻</p>
      }
    </div>
    </>
  );
}