import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import counterRecuder from "./slices/counterSlices";

const makeStore = ()=>
  configureStore({
    reducer: {
      counter: counterRecuder,
    },
  });

export const wrapper = createWrapper(makeStore);