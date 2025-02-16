  import { useState } from "react";

export function HideTitel({Title}) {
  const [show, setShow] = useState("");
  return (
    <div className="flex flex-row gap-84 my-32 ">
      <button
        className="bg-blue-600 text-red-600 w-48 h-24 text-[32px]"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
      {show?<h1 className="color-black-700 text-[32px]">{Title}</h1>:null}
    </div>
  );
}
