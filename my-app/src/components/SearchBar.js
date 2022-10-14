import React from "react";
import "../App.css";
import { GlobalStoreContext } from "./Store";
function SearchBar() {
  const { gridSizeL } = React.useContext(GlobalStoreContext);
  const search = (e) => {
    console.log(gridSizeL.gridSize);
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        const elements =
          document.getElementsByClassName("gridRow")[i].childNodes[j];
        if (elements.textContent === e.target.value) {
          elements.style.background = "red";
          console.log("Heldssssso");
        }
      }
    }
  };
  return (
    <div className="searchBar">
      <input type="text" className="input" onChange={search}></input>
    </div>
  );
}

export default SearchBar;
