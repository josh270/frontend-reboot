
import Button from "./Button";

function Counter({ count, increase, decrease, reset }) {
  return (
    <div>
      <p>Count: {count}</p>

      <Button text="Increase" onClick={increase} />
      <Button text="Decrease" onClick={decrease} />
      <Button text="Reset" onClick={reset} />
    </div>
  );
}

export default Counter;
