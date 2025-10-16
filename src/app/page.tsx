"use client";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";
import Link from 'next/link';
import SkeletonCard from "@/components/SkeletonCard";
import { fetchProducts, searchProduct, fetchByCategory } from "@/lib/api";
import { Product } from "@/types";
import {useEffect, useState } from "react";

// export const revalidate = 60;
export default function Home() {
  const [searchKW, setSearchKW] = useState<string>('');
  const [categoryKW, setCategoryKW] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{
    let mounted = true;
    async function loadProducts(): Promise<void>{
      setLoading(true);
      setError(null);
      try{
        if(categoryKW === '')
          setProducts(await fetchProducts());
        else
          setProducts(await fetchByCategory(categoryKW));
      }
      catch(err){
        console.error(err)
        if(mounted)
          setError('Failed to load products');
      }
      finally{
        if(mounted) 
          setLoading(false)
      }
    }
    loadProducts();
    return ()=>{mounted=false}
  },[categoryKW]);
  
  useEffect(()=>{
    const id = setTimeout(()=>{
        const kw = searchKW.trim();
        if(kw === ''){
          setError(null);
          return;
        }
        let mounted = true;
        (async ()=>{
          setLoading(true);
          setError(null);
        try{
          setProducts(await searchProduct(kw));
        }
        catch(err){
          console.error(err)
          if(mounted)
            setError('Search failed');
        }
        finally{
          if(mounted) 
            setLoading(false)
        }
      })();
      return ()=>{mounted=false};
      }, 500);
      return ()=>clearTimeout(id);
  },[searchKW]);

  return (
    <>
    {/* Header */}
    <div className="w-full h-12 px-10 py-1.5 bg-white/80 backdrop-blur-md inline-flex items-center justify-between ">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-400">Product Explorer</h1>
      <FilterBar setKW={setCategoryKW}/>
      <SearchBar setKW={setSearchKW}/>
    </div>

    {/* Error Handling */}
    {error ? (
      <div className="w-full p-4 bg-red-50 border border-red-200 text-red-700 flex items-center justify-between gap-4">
          <div>
            <strong>Error Loading Products:</strong> {error}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setError(null);
                // handleRetry();
              }}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Retry
            </button>
          </div>
        </div>
    ): null}

    <div className="font-sans w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-h-screen pb-20 sm:p-20 p-4">
  {/* Loading State Handling */}
  {loading ? (
    Array.from({ length: 8 }).map((_, index) => (
      <div key={index} className="h-80">
        <SkeletonCard />
      </div>
    ))
  ) : Array.isArray(products) && products.length > 0 ? (
    products.map((product) => (
      <Link href={`/products/${product.id}`} key={product.id}>
        <div className="h-80">
          <ProductCard item={product} details={false} />
        </div>
      </Link>
    ))
  ) : (
    <p className="col-span-full text-center text-lg">No Products Found! 👻</p>
  )}
</div>

    </>
  );
}