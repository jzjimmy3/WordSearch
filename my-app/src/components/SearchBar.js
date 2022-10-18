import React from "react";
import "../App.css";
import { GlobalStoreContext } from "./Store";
function SearchBar() {
  const { gridSize } = React.useContext(GlobalStoreContext);
  // const search = (e) => {
  //   e.target.value = e.target.value.toUpperCase();
  //   for (var i = 0; i < gridSize.gridSize; i++) {
  //     for (var j = 0; j < gridSize.gridSize; j++) {
  //       const elements =
  //         document.getElementsByClassName("gridRow")[i].childNodes[j];
  //       var searchBarArray = e.target.value.split("");
  //       for (var k = 0; k < searchBarArray.length; k++) {
  //         if (elements.textContent === searchBarArray[k]) {
  //           elements.classList.add("selected");
  //         }
  //       }
  //     }
  //   }
  // };
  const search = () => {
    var val = document.getElementById("searchBar").value;
    console.log(val);
    for (var i = 0; i < gridSize.gridSize; i++) {
      for (var j = 0; j < gridSize.gridSize; j++) {
        const elements =
          document.getElementsByClassName("gridRow")[i].childNodes[j];
        var searchBarArray = val.split("");
        for (var k = 0; k < searchBarArray.length; k++) {
          if (elements.textContent === searchBarArray[k]) {
            elements.classList.add("selected");
          }
        }
      }
    }
  };
  const upperCase = (e) => {
    e.target.value = e.target.value.toUpperCase();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      console.log("Deleted");
    }
  };
  return (
    <div className="searchBar">
      <input
        type="text"
        className="input"
        onChange={upperCase}
        onKeyDown={handleKeyDown}
        id="searchBar"
      ></input>
      <button onClick={search}>Search Me</button>
    </div>
  );
}

export default SearchBar;
