import React, { useState, useContext } from "react";
import "../App.css";
import Grid from "./Grid";
import { GlobalStoreContext } from "./Store.js";

export default function RangeSlider() {
  var { grid } = useContext(GlobalStoreContext);
  const [value, setValue] = useState(20);

  const rangeHandler = ({ target: { value: val } }) => {
    setValue(val);
    grid.gridSize = val;
  };

  return (
    <div className="sliderParent">
      <input type="range" min="20" max="50" onChange={rangeHandler} />
      <Grid rows={value} cols={value} />
      <div>Grid Size: {value}</div>
    </div>
  );
}
