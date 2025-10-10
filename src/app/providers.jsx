"use client";

import {Provider} from "react-redux";
import { useStore } from "../store/useStore";

export function Providers({children}){
  const store = useStore();
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}