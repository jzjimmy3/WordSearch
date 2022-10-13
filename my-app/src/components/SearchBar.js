import React from "react";
import "../App.css";
import Grid from "./Grid";
import { value } from "./RangeSlider";

function SearchBar() {
  const search = () => {
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        // console.log(value);
        const elements =
          document.getElementsByClassName("gridRow")[i].childNodes[j];
        if (elements.textContent === "P") {
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
