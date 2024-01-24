import React from "react";
import { increase, decrease, reset } from "../redux/features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";



const CounterApp=()=>{
    
    const count=useSelector(state=> state.counter);
    const despatch=useDispatch();

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>despatch(increase())}>increase</button>
            <button onClick={()=>despatch(decrease())}>decrease</button>
            <button onClick={()=>despatch(reset())}>reset</button>
        </div>
    )
}
export default CounterApp;