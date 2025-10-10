"use client";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import {increment, decrement, reset} from "../../store/slices/counterSlices";

export default function TestStore(){
  const dispatch = useDispatch();
  const count = useSelector(state=>state.counter.value);

  return(
    <div className="text-center">
      <h1>Count: {count}</h1>
      <button type="button" 
      onClick={()=>dispatch(increment())}>
        Increment
      </button>
      <button type="button" 
      onClick={()=>dispatch(decrement())}>
        Decrement
      </button>
      <button type="button" 
      onClick={()=>dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}