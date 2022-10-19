import { useContext, useEffect } from "react";
import "../App.js";
import "../App.css";
import { GlobalStoreContext } from "./Store.js";

import { AppContext } from "../App";

export default function Grid(props) {
  // const gridLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const gridLetters =
    "AAAAAAAABBBBCCCCDDDDEEEEEEEEEEEEFFFGGGHHHIIIIIIIIJKKLLLLLLLLMMMMNNNNNNNOOOOOOOOPPPQRRRRRRRRSSSSSSSTTTTTTTUUUUUUUUVVVWWXXYYYYYYYYZZ";
  const { onClearBoard } = useContext(AppContext);
  var { grid } = useContext(GlobalStoreContext);
  useEffect(() => {
    onClearBoard();
    grid.gridSize = props.rows;
    const container = document.getElementById("grid-container");
    for (var i = 0; i < props.rows; i++) {
      container.appendChild(document.createElement("div")).className = "gridRow";
      for (var j = 0; j < props.cols; j++) {
        const createDiv = document.createElement("div");
        const gridRow = document.getElementsByClassName("gridRow")[i];
        gridRow.appendChild(createDiv).className = "gridCol";
        gridRow.childNodes[j].textContent = gridLetters.charAt(Math.floor(Math.random() * gridLetters.length));
      }
    }
  });
}
