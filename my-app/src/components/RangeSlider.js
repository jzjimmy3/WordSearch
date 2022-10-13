import React, { useState, useEffect } from "react";
import "../App.css";
import Grid from "./Grid";
export default function RangeSlider() {
  const [value, onChange] = useState(10);
  return (
    <div className="sliderParent">
      <input
        type="range"
        min="10"
        max="15"
        onChange={({ target: { value: val } }) => {
          onChange(val);
        }}
      />
      <Grid rows={value} cols={value} />
      <div>Grid Size: {value}</div>
    </div>
  );
}
