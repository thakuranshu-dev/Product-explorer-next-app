import { useMemo } from "react";
import {makeStore} from "./store";
import { initialize } from "next/dist/server/lib/render-server";

let store;
export const useStore = (initialState) => {
  const createdStore = useMemo(()=>
    makeStore(initialState), [initialState]
  );
  return createdStore;
};