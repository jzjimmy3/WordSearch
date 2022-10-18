import React, { useState, useContext } from "react";
import "../App.css";
import Grid from "./Grid";
import { GlobalStoreContext } from "./Store.js";

export default function RangeSlider() {
  var { gridSize } = useContext(GlobalStoreContext);
  const [value, setValue] = useState(20);

  const rangeHandler = ({ target: { value: val } }) => {
    setValue(val);
    gridSize.gridSize = val;
  };

  return (
    <div className="sliderParent">
      <input type="range" min="10" max="20" onChange={rangeHandler} />
      <Grid rows={value} cols={value} />
      <div>Grid Size: {value}</div>
    </div>
  );
}
