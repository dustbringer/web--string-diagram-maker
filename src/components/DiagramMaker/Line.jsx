import React from "react";
import { styled } from "@mui/system";

const MyLine = styled("line")`
  &:hover {
    cursor: pointer;
  }
`;

function Line({ x1, y1, x2, y2, stroke, strokeWidth, strokeLinecap, onClick }) {
  return (
    <MyLine
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      onClick={onClick}
    />
  );
}

export default Line;
