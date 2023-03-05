import React from "react";

function Node({ cx, cy, radius = 3 }) {
  return <circle cx={cx} cy={cy} fill="lightgrey" r={radius} />;
}

export default Node;
