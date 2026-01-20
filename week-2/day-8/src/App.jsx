import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const resetAll = () => {
    setCount(0);
    setName("");
  };

  return (
    <div>
      <h1>Day 9 – React State & Events</h1>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <hr />

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello, {name}</p>

      <hr />

      <button onClick={resetAll}>Reset</button>
    </div>
  );
}

export default App;
