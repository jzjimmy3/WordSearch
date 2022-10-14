import React from "react";
import { useState } from "react";

export const GlobalStoreContext = React.createContext({});

export const useGlobalStore = () => {
  const [gridSize, setGridSize] = useState(10);

  const store = {
    gridSize: [gridSize, setGridSize],
  };

  return (
    // <div>
    //   <SearchBar gridSize={gridSize} />
    //   <RangeSlider setGridSize={setGridSize} />
    // </div>
    store
  );
};
