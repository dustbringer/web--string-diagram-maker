// Section size, area around each object
export const ssSvg = 100;
export const ssDisp = 120; // in px
export const padSvg = ssSvg / 2;
export const padDisp = ssDisp / 2;

export const getSvgInfo = (width, height) => ({
  width: ssDisp * width,
  height: ssDisp * height,
  vieww: ssSvg * width,
  viewh: ssSvg * height,
  posSvg: (x) => padSvg + ssSvg * x,
  posDisp: (x) => padDisp + ssDisp * x,
});
