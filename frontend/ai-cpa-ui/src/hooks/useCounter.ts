import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  return {
    count,
    increment: () => setCount((c) => c + 1),
    decrement: () => setCount((c) => c - 1),
  };
}
