import React from "react";
import { useState } from "react";
import RangeSlider from "./RangeSlider";
import SearchBar from "./SearchBar";

export const GlobalStoreContext = React.createContext({});

export const useGlobalStore = () => {
  //   const teamMembersNames = ['John', 'Mary', 'Jason', 'David']
  const [gridSize, setGridSize] = useState(10);

  const store = {
    gridSize: [gridSize, setGridSize],
  };

  return (
    <div>
      <SearchBar gridSize={gridSize} />
      <RangeSlider setGridSize={setGridSize} />
    </div>

    // store
  );
};
