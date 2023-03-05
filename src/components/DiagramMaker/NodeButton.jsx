import React from "react";
import { styled } from "@mui/system";

const NodeButton = styled("div")`
  height: ${(props) => 2 * props.radius || 10}px;
  width: ${(props) => 2 * props.radius || 10}px;
  border-radius: ${(props) => props.radius || 5}px;
  background-color: none;
  opacity: 0.1;
  position: absolute;
  top: ${(props) => (props.top || 0) - (props.radius || 5)}px;
  left: ${(props) => (props.left || 0) - (props.radius || 5)}px;

  &:hover {
    ${(props) => !props.selected && `background-color: darkgrey;`}
    cursor: pointer;
  }

  ${(props) =>
    props.selected &&
    `
    background-color: red;    
  `}
`;

export default NodeButton;
