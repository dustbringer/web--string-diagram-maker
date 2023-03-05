// Section size, area around each object
export const ssSvg = 100;

export const getSvgInfo = (width, height, dispScale) => {
  const padSvg = ssSvg / 2;
  const padDisp = dispScale / 2;

  return {
    width: dispScale * width,
    height: dispScale * height,
    vieww: ssSvg * width,
    viewh: ssSvg * height,
    posSvg: (x) => padSvg + ssSvg * x,
    posDisp: (x) => padDisp + dispScale * x,
  };
};
