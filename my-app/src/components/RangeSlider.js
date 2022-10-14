import React, { useState, useEffect } from "react";
import "../App.css";
import Grid from "./Grid";
import { GlobalStoreContext } from "./Store.js";

export var val = 2;
export default function RangeSlider({ setGridSize }) {
  var { gridSize } = React.useContext(GlobalStoreContext);
  const [value, setValue] = useState(20);

  const rangeHandler = ({ target: { value: val } }) => {
    setValue(val);
    setGridSize = 5;
  };

  return (
    <div className="sliderParent">
      <input type="range" min="10" max="15" onChange={rangeHandler} />
      <Grid rows={value} cols={value} />
      <div>Grid Size: {value}</div>
    </div>
  );
}
