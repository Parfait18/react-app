import { useState } from "react";

export const useIncrement = function Increment({
  base = 0,
  max = Infinity,
  min = -Infinity,
}) {
  const [state, setState] = useState(base);
  const increment = () => setState((v) => (v < max ? v + 1 : v));
  const decrement = () => setState((v) => (v > min ? v - 1 : v));

  //   return [state, incrementState, decrementState];

  return {
    count: state,
    increment: increment,
    decrement: decrement,
  };
};
