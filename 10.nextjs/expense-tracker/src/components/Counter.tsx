"use client";

import React, { useState } from "react";
function checkLocalstorage() {
  if (typeof window !== "undefined") {
    console.log(localStorage);
  }
}
checkLocalstorage();
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button
        onClick={() => {
          console.log("hello n:", count);
        }}
      >
        Say hello
      </button>
    </div>
  );
}
