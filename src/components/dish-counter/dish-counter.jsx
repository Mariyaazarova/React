import { useState } from "react";
import { Counter } from "../counter/counter";

export const DishCounter = () => {
  const [value, setCount] = useState(0);

  const handleIncrement = () => {
    if (value < 5) {
      setCount(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value >= 1) {
      setCount(value - 1);
    }
  };
  return (
    <Counter
      value={value}
      increment={handleIncrement}
      decrement={handleDecrement}
    />
  );
};
