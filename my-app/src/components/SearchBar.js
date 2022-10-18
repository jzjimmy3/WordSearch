import React from "react";
import "../App.css";
import { GlobalStoreContext } from "./Store";
function SearchBar() {
  const { gridSize } = React.useContext(GlobalStoreContext);
  // const search = () => {
  //   var val = document.getElementById("searchBar").value;
  //   console.log(val);
  //   for (var i = 0; i < gridSize.gridSize; i++) {
  //     for (var j = 0; j < gridSize.gridSize; j++) {
  //       const elements =
  //         document.getElementsByClassName("gridRow")[i].childNodes[j];
  //       var searchBarArray = val.split("");
  //       for (var k = 0; k < searchBarArray.length; k++) {
  //         if (elements.textContent === searchBarArray[k]) {
  //           elements.classList.add("selected");
  //         }
  //       }
  //     }
  //   }
  // };
  const color = (i, j, count, word) => {
    if (
      i < 0 ||
      i >= gridSize.gridSize ||
      j < 0 ||
      j >= gridSize.gridSize ||
      document.getElementsByClassName("gridRow")[i].childNodes[j]
        .textContent !== word[count]
    ) {
      console.log(word[count]);
      return false;
    }
    document
      .getElementsByClassName("gridRow")
      [i].childNodes[j].classList.add("selected");
    color(i + 1, j, count + 1, word) ||
      color(i - 1, j, count + 1, word) ||
      color(i, j + 1, count + 1, word) ||
      color(i, j - 1, count + 1, word);
  };
  const search = () => {
    console.log("search");
    for (var i = 0; i < gridSize.gridSize; i++) {
      for (var j = 0; j < gridSize.gridSize; j++) {
        if (dfs(i, j, 0, document.getElementById("searchBar").value)) {
          color(i, j, 0, document.getElementById("searchBar").value);
        }
      }
    }
  };
  const dfs = (i, j, count, word) => {
    if (count == word.length) return true;
    if (
      i < 0 ||
      i >= gridSize.gridSize ||
      j < 0 ||
      j >= gridSize.gridSize ||
      document.getElementsByClassName("gridRow")[i].childNodes[j]
        .textContent !== word[count]
    ) {
      console.log(word[count]);
      return false;
    }
    var element = document.getElementsByClassName("gridRow")[i].childNodes[j];
    var val = document.getElementById("searchBar").value.split("");

    // console.log(element.textContent);
    // if (element.textContent === val[count]) {
    //   element.classList.add("selected");
    // }

    var temp = element.textContent;
    element.textContent = " ";

    const found =
      dfs(i + 1, j, count + 1, word) ||
      dfs(i - 1, j, count + 1, word) ||
      dfs(i, j + 1, count + 1, word) ||
      dfs(i, j - 1, count + 1, word);
    element.textContent = temp;
    console.log(found);
    return found;
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
