import { useState } from "react";

export default function TodooList() {
    const [todoo,setTodoo] = useState("");
    const [todoos,setTodoos]=useState([])
  return (
        <>
    <div>

        <div className="flex flex-row gap-80 my-8">
        <label htmlFor="toddo-List"></label>
          <input className="border border-black/50 rounded-2xl w-80"
            type="text"
            name="todoo"
            placeholder="Todoo List"
            value={todoo}
            onChange={(event) => {
              setTodoo(event.currentTarget.value);
            }}/>
        <button className="bg-red-200 text-3xl w-40 h-12 rounded-2xl shadow-amber-600" onClick={()=>{
            
            setTodoos([...todoos,todoo])
            }}
        >Add</button>
        </div>
            
        <ul className="list-disc">
            <li>
                
            </li>


        </ul>
    </div>
    
    
    </>
  )
}
