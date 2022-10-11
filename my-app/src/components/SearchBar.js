import React from "react";
import "../App.css";

function SearchBar() {
  const search = () => {
    for (var i = 0; i < 100; i++) {
      var elements = document.getElementsByClassName("grid-item")[i].innerHTML;
      if (elements === "H") {
        console.log("Hello");
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
