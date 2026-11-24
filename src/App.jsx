
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  return (
    <div>
      <h1>React Counter</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      <h1>Calculator</h1>

      <input
        type="number"
        placeholder="First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setResult(Number(num1) + Number(num2))}>+</button>
      <button onClick={() => setResult(Number(num1) - Number(num2))}>-</button>
      <button onClick={() => setResult(Number(num1) * Number(num2))}>*</button>
      <button onClick={() => setResult(Number(num1) % Number(num2))}>%</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
