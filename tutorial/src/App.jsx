import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Square from "./components/Board";
import Board from "./components/Board";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="Title">Tic Tac Toe react game</h1>
      <Board />
    </>
  );
}

export default App;
