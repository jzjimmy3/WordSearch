import React, { useContext, useRef, useEffect } from "react";
import "../App.js";
import "../App.css";

import { AppContext } from "../App";

export default function Grid(props) {
  const gridLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const { onClearBoard } = useContext(AppContext);

  useEffect(() => {
    onClearBoard();
    const container = document.getElementById("grid-container");
    for (var i = 0; i < props.rows; i++) {
      container.appendChild(document.createElement("div")).className =
        "gridRow";
      for (var j = 0; j < props.cols; j++) {
        const createDiv = document.createElement("div");
        const getElement = document.getElementsByClassName("gridRow")[i];
        getElement.appendChild(createDiv).className = "gridCol";
        getElement.childNodes[j].textContent = gridLetters.charAt(
          Math.floor(Math.random() * 26)
        );
      }
    }
  });
}
