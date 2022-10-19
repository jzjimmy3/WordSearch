import React from "react";
import "../App.css";
import { GlobalStoreContext } from "./Store";

function SearchBar() {
  const { grid } = React.useContext(GlobalStoreContext);

  const color = (i, j, count, word) => {
    if (dfsBoundary(i, j, count, word)) {
      return false;
    }
    document.getElementsByClassName("gridRow")[i].childNodes[j].classList.add("selected");
    color(i + 1, j, count + 1, word) ||
      color(i - 1, j, count + 1, word) ||
      color(i, j + 1, count + 1, word) ||
      color(i, j - 1, count + 1, word);
  };

  const search = () => {
    for (var i = 0; i < grid.gridSize; i++) {
      for (var j = 0; j < grid.gridSize; j++) {
        if (dfs(i, j, 0, document.getElementById("searchBar").value)) {
          color(i, j, 0, document.getElementById("searchBar").value);
        }
      }
    }
  };

  const dfs = (i, j, count, word) => {
    if (count === word.length) return true;
    if (
      i < 0 ||
      i >= grid.gridSize ||
      j < 0 ||
      j >= grid.gridSize ||
      document.getElementsByClassName("gridRow")[i].childNodes[j].textContent !== word[count]
    ) {
      return false;
    }
    var element = document.getElementsByClassName("gridRow")[i].childNodes[j];
    var temp = element.textContent;
    element.textContent = " ";

    const found =
      dfs(i + 1, j, count + 1, word) ||
      dfs(i - 1, j, count + 1, word) ||
      dfs(i, j + 1, count + 1, word) ||
      dfs(i, j - 1, count + 1, word);
    element.textContent = temp;
    return found;
  };

  const upperCase = (e) => {
    e.target.value = e.target.value.toUpperCase();
  };

  const dfsBoundary = (i, j, count, word) => {
    if (
      i < 0 ||
      i >= grid.gridSize ||
      j < 0 ||
      j >= grid.gridSize ||
      document.getElementsByClassName("gridRow")[i].childNodes[j].textContent !== word[count]
    ) {
      return true;
    }
  };

  const clearMe = () => {
    var elements = document.getElementsByClassName("selected");
    while (elements.length > 0) {
      elements[0].classList.remove("selected");
    }
  };
  return (
    <div className="searchBar">
      <input type="text" className="input" onChange={upperCase} id="searchBar"></input>
      <button onClick={search}>Search Me</button>
      <button onClick={clearMe}>Clear Me</button>
    </div>
  );
}

export default SearchBar;
