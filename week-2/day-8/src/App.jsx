import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import Title from "./components/Title";

function App() {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div className="container">
      <h1>Day 13 – Components & Props</h1>

      <Title text="Reusable Components are 🔥" />

      <Counter
        count={count}
        increase={() => setCount(count + 1)}
        decrease={() => setCount(count - 1)}
        reset={() => setCount(0)}
      />
    </div>
  );
}

export default App;
