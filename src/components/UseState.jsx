import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const incrementHandeler = (iteration = 1) => {
    setCount((prevCount) => prevCount + iteration);
  };

  const decrementHandeler = (iteration = 1) => {
    setCount((prevCount) => prevCount - iteration);
  };

  const resetHandeler = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => incrementHandeler()}>Intrement</button>
      <button onClick={() => incrementHandeler(5)}>Intrement Five</button>
      <button onMouseOver={() => decrementHandeler()}>Decriment</button>
      <button onMouseOver={() => decrementHandeler(5)}>Decriment Five</button>
      <button onClick={resetHandeler}>Reset</button>
    </div>
  );
};

export default UseState;
