import React from "react";
import "../App.css";
import { GlobalStoreContext } from "./Store";
function SearchBar() {
  const { gridSize } = React.useContext(GlobalStoreContext);
  const search = (e) => {
    for (var i = 0; i < gridSize.gridSize; i++) {
      for (var j = 0; j < gridSize.gridSize; j++) {
        const elements =
          document.getElementsByClassName("gridRow")[i].childNodes[j];
        if (elements.textContent === e.target.value) {
          // elements.style.background = "red";
          elements.classList.add("selected");
          // elements.classList.remove("gridCol");
        }
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      console.log("Backspace key pressed");
    }
  };
  return (
    <div className="searchBar">
      <input
        type="text"
        className="input"
        onChange={search}
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
}

export default SearchBar;
