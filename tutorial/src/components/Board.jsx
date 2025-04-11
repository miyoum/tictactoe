import React, { useState } from "react";
import Square from "./Square";
import "./../assets/styles.css";

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "winner is : " + winner;
  } else status = "Next player is : " + (xIsNext ? "X" : "O");
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquare = squares.slice();
    if (xIsNext)
      nextSquare[i] = "x"
    // (
    //     <img
    //       src={x}
    //       alt="x player"
    //       style={{ width: "100%", height: "100%", objectFit: "contain" }}
    //     />
    //   );
    else
      nextSquare[i] = "o"
    // (
    //     <img
    //       src={o}
    //       alt="o player"
    //       style={{ width: "100%", height: "100%", objectFit: "contain" }}
    //     />
    //   );
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  }
  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c])
        return squares[a];
    }
    return null;
  }
  return (
    <>
      <div className="Status">{status}</div>
      <div className="board-row"style={{ display: "flex", width: "100%" }}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row"style={{ display: "flex", width: "100%" }}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row"style={{ display: "flex", width: "100%" }}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
