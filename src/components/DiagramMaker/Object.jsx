import * as React from "react";

const radius = 5; // px?

function Object(props) {
  return (
    <g {...props}>
      <circle cx="0" cy="0" r={radius} />
    </g>
  );
}

export default Object;
