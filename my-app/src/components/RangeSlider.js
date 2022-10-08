import React, { useState, useEffect } from "react";
import "../App.css";
import Grid from "./Grid";

function RangeSlider(size) {
  const [value, onChange] = useState(2);
  return (
    <div className="sliderParent">
      <input
        type="range"
        min="2"
        max="5"
        onChange={({ target: { value: radius } }) => {
          onChange(radius);
        }}
      />
      <Grid rows={2} cols={2} />
      <div className="buble">{value}</div>
    </div>
  );
}

export default RangeSlider;
