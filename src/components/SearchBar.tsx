"use client";
import { SetKW } from "@/types";

export default function SearchBar({setKW}: SetKW) {
  return(
    <form name="searchForm" className="h-full" >
      <input type="text" 
      name="searchBar" 
      placeholder="Search by name..."
      onChange={(e)=>setKW(e.target.value)}
      className="h-full px-2 border border-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
      />
        {/* TODO: implement debouncing */}
    </form>
  )
}