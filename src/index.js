import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Tommy Cao React Hook Counter</h1>
      <h2>You clicked {count} times!</h2>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

