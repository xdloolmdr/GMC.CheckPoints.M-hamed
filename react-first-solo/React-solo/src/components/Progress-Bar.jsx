import { useState } from "react";

export default function ProgressBar() {
  const [val, setVal] = useState(0);
  return (
    <>
      <div className="flex flex-col py-4 my-6 justify-center">
        <h1 className="text-6xl">Progress Bar</h1>
        <div className="w-160 h-16 bg-gray-400 border-4 overflow-hidden border-black/40 rounded-2xl my-20">
          <div className=" bg-red-500 h-full  " style={{ width: `${val}%` }}></div>
        </div>
        <div className="flex flex-row gap-4">
          <span>Input percentage</span>
          <label htmlFor="number"></label>
          <input
            className="border borber-black/40"
            type="number"
            value={val}
            onChange={(e) => {
              setVal(Number(e.currentTarget.value));
            }}
          />
        </div>
      </div>
    </>
  );
}
