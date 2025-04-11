import React, { useState } from "react";
import "./../assets/styles.css";
import x from "./../assets/x.png";
import o from "./../assets/o.png";
export default function Square({ value, onSquareClick }) {
  return (
    <button className="Square" onClick={onSquareClick}>
      {value === "x" && (
        <img src={x} alt="x" style={{ width: "4em", height: "4em" }} />
      )}
      {value === "o" && (
        <img src={o} alt="o" style={{ width: "4em", height: "4em" }} />
      )}{" "}
    </button>
  );
}
