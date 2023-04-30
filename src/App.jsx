import { useState } from "react";
import "./App.css";
import Countries from "./components/Countries";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Here will show all countries name.</h1>
      <Countries></Countries>
    </>
  );
}

export default App;
