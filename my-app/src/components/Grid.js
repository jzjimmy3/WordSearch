import React, { useContext } from "react";
import "../App.css";
import { useRef, useEffect } from "react";
import "../App.js";
import { AppContext } from "../App";

export default function Grid(props) {
  const gridLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const { onClearBoard } = useContext(AppContext);
  const ref = useRef(null);

  useEffect(() => {
    onClearBoard();
    const container = document.getElementById("grid-container");
    container.style.setProperty("--grid-cols", props.cols);
    container.style.setProperty("--grid-rows", props.rows);
    for (var i = 0; i < props.rows * props.cols; i++) {
      const grid = document.createElement("div");
      const text = (grid.textContent = gridLetters.charAt(
        Math.floor(Math.random() * 26)
      ));
      container.appendChild(grid).className = "grid-item";
    }
  });
}
