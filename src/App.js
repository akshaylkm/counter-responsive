import { useState } from "react";
function App() {
  const [count,setCount]=useState(0)
  return (
    <div className="bg-[#F8F8F8] w h-screen flex justify-center items-center  ">
       <div className=" bg-[#FFFFFF] w-[31.75rem] h-44  drop-shadow-lg">
         <div className=" bg-[#FFFFFF] w-2/5 h-full float-left border-[#D0D7E8] border-r-2  ">
           <div className=" h-32 flex justify-center pt-9">
           <h1 className=" text-[#526CC6] text-5xl font-bold ">{count}</h1>
           </div>
           <button onClick={() => setCount(count + 1)} 
           className=" w-1/2 h-12 border-t-2 border-r-2">+</button>
           <button onClick={() => setCount(count - 1)}
           className=" w-1/2  h-12 border-t-2">-</button>
         </div>
         <div className=" pl-2 bg-[#FFFFFF] w-3/5 h-full float-left">
           <h3 className="font-medium">The Counter</h3>
           <p className=" text-[#526CC6] font-thin">Click the plus or minus buttons to add or subtract from the number shown just above it</p>
           <h1 onClick={() => setCount(0)} className=" text-[#526CC6] font-semibold flex justify-end pt-8 m-1 cursor-pointer ">Reset Counter To 0</h1>
         </div>
       </div>
    </div>
  );
}

export default App;
