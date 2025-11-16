import React from "react";
import { useCounterStore } from "./store";

function App(){
const count = useCounterStore((state)=>state.count)
const increase = useCounterStore((state)=>state.increase)
const decrease = useCounterStore((state)=>state.decrease)
  return(
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increase}>+ increase</button>
      <button onClick={decrease}>- decrease</button>
    </div>

  );
}
export default App;
