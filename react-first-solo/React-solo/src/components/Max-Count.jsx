import { useEffect, useState } from "react";
export default function Max-Count() {
    const[count,setCount]=useState(0);
    const[timeLeft,setTimeLeft]=useState(10);
    useEffect(()=>{
        const int= setInterval(()=>{
            setTimeLeft(prev=>prev-1)
        },1000) 
        return()=>(clearInterval(int)) 
    },[])
  return (
    <>
    <div> 
    



    </div>
    <button onClick={()=>{
        setCount(count+1)
      
      }} ></button>
    
    
    
    </>
  )
}
