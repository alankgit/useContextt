import { useContext, useState } from "react";
import "./App.css";
import { context } from "./Context/Context";

function App() {
  const [count, setCount] = useState(0);

  const { items } = useContext(context);

  return (
    <div className='App'>
      <h1>Hello</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <p>{count}</p>
      <h1>{items[2]}</h1>
    </div>
  );
}

export default App;
