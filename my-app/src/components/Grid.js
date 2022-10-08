import React from "react";
import "../App.css";
import { useRef, useEffect } from "react";

export default function Grid(rows, cols) {
  const gridLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const ref = useRef(null);
  useEffect(() => {
    const container = document.getElementById("grid-container");
    container.style.setProperty("--grid-cols", cols);
    container.style.setProperty("--grid-rows", rows);
    for (var i = 0; i < rows * cols; i++) {
      const grid = document.createElement("div");
      const text = (grid.textContent = gridLetters.charAt(
        Math.floor(Math.random() * 26)
      ));
      container.appendChild(grid).className = "grid-item";
    }
  });
}
