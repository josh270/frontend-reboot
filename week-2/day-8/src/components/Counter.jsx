import Button from "./Button";

function Counter({ count, increase, decrease, reset }) {
  return (
    <div>
      <p>Count: {count}</p>

      {count === 0 && <p>Start counting 👇</p>}
      {count > 0 && count < 10 && <p>Nice! Keep going 🚀</p>}
      {count < 0 && <p>Whoa… negative numbers 😅</p>}
      {count >= 10 && <p>Maximum reached</p>}

      <Button
        text="Increase"
        onClick={increase}
        disabled={count >= 10}
      />

      {count !== 0 && (
        <Button text="Decrease" onClick={decrease} />
      )}

      {count !== 0 && (
        <Button text="Reset" onClick={reset} />
      )}
    </div>
  );
}

export default Counter;
