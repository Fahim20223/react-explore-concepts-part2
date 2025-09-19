import { useState } from "react";

export default function Practice2() {
  const [count, setCount] = useState("");
  return (
    <div>
      <h3>Show : </h3>
      <button>Show</button>
      <button>Hide</button>
    </div>
  );
}
