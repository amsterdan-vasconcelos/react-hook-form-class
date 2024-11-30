import { useState } from "react";

export function useCount() {
  const [count, setCount] = useState(1);

  const increase = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return {
    count,
    increase,
    decrement,
  };
}
