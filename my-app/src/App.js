import "./App.css";
import Keyboard from "./components/Keyboard";
import Grid from "./components/Grid";
import SearchBar from "./components/SearchBar";
import RangeSlider from "./components/RangeSlider";
import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

function App() {
  const onClearBoard = () => {
    var elements = document.getElementsByClassName("grid-item");
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
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
