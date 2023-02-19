import React from "react";
import { styled } from "@mui/system";

import Box from "@mui/material/Box";

import FixedSVG from "../FixedSVG";
import Object from "./Object";

import { ssSvg, Side, getSvgInfo, DiagramInfo, bezierDist } from "./position";

const ntop = 3;
const nbot = 5;
const height = 2;

const svgInfo = getSvgInfo(ntop, nbot, height);
const DInfo = new DiagramInfo(ntop, nbot, height);

function DiagramMaker() {
  return (
    <div>
      <FixedSVG
        width={`${svgInfo.width}px`}
        height={`${svgInfo.height}px`}
        viewBox={`0 0 ${svgInfo.vieww} ${svgInfo.viewh}`}
      >
        {/* Dots on top */}
        {[...Array(ntop)].map((e, i) => (
          <Object
            key={`Top Object ${i}`}
            transform={`translate(${DInfo.posH(i + 1, Side.TOP)}, ${DInfo.posV(
              Side.TOP
            )})`}
          />
        ))}

        {/* Dots on the bottom */}
        {[...Array(nbot)].map((e, i) => (
          <Object
            key={`Bottom Object ${i}`}
            transform={`translate(${DInfo.posH(i + 1, Side.BOT)}, ${DInfo.posV(
              Side.BOT
            )})`}
          />
        ))}

        {/* Lines between them */}
        <path
          d={DInfo.getPath(1, Side.TOP, 1, Side.BOT)}
          stroke="red"
          strokeWidth={5}
          fill="transparent"
          />

        <path
          d={DInfo.getPath(2, Side.TOP, 4, Side.BOT)}
          stroke="red"
          strokeWidth={5}
          fill="transparent"
          onClick={() => console.log("Delete me!")}
        />
        <path
          d={DInfo.getPath(3, Side.TOP, 5, Side.BOT)}
          stroke="red"
          strokeWidth={5}
          fill="transparent"
        />
        <path
          d={DInfo.getPath(2, Side.BOT, 3, Side.BOT)}
          stroke="red"
          strokeWidth={5}
          fill="transparent"
        />
      </FixedSVG>
    </div>
  );
}

export default DiagramMaker;
