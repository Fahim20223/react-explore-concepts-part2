import { useState } from "react";

export default function Practice1() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    const count1 = count + 1;
    setCount(count1);
  };
  const handleMinus1 = () => {
    if (count > 0) {
      const countMinus1 = count - 1;
      setCount(countMinus1);
    }
  };
  const handleReset = () => {
    const allClear = count * 0;
    setCount(allClear);
  };
  return (
    <div>
      <h1>Count : {count}</h1>

      <div>
        <button onClick={handleCount}>click1</button>
        <button onClick={handleMinus1}>Click2</button>
        <button onClick={handleReset}>reset-1</button>
      </div>
    </div>
  );
}
