"use client";
import { Category, SetKW } from "@/types";
import { fetchCategoryList } from "@/lib/api";
import { useState, useEffect } from "react";

export default ({setKW}: SetKW)=>{
  const [categories, setCategories] = useState<Category[]>([]);
  const [value, setValue] = useState<string>('');

  useEffect(()=>{
    let mounted = true;
    (async()=>{
      try{
        const list = await fetchCategoryList();
        if(mounted) setCategories(list);
      }
      catch(err){console.error(err)};
    })();
    return ()=>{mounted=false};
  }, []);

  return(
    <div className="h-full inline-flex items-center justify-around gap-1">
      {/* <label htmlFor="category">Filter by Category: </label> */}
      <select
        id="category"
        value={value}
        onChange={(e) => {
          setKW(e.target.value)
          setValue(e.target.value)
        }}
        className="h-full border border-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
      >
        <option value="">Filter by: None</option>
      {categories?.map(
        (category, index) => (
          <option key={index} value={category.toString()}>
            Filter by: {category.toString()}
          </option>
        ))
      }
    </select>
    </div>
  )
}
