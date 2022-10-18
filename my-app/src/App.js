import "./App.css";
import SearchBar from "./components/SearchBar";
import RangeSlider from "./components/RangeSlider";
import React, { useState, createContext, useEffect } from "react";
import SearchButton from "./components/SearchButton";

export const AppContext = createContext();

function App() {
  const onClearBoard = () => {
    var elements = document.getElementsByClassName("gridRow");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  };

  return (
    <div className="App">
      <nav>
        <h1> Word Search</h1>
      </nav>
      <div className="board " id="grid-container"></div>

      <AppContext.Provider value={{ onClearBoard }}>
        <SearchBar />
        <RangeSlider />
      </AppContext.Provider>
    </div>
  );
}

export default App;
