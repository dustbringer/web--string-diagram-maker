// Section size, area around each object
export const ssSvg = 100;
export const ssDisp = 150; // in px
export const bezierDist = 80; // TODO: Scale this with height?

export const Side = Object.freeze({
  TOP: 0,
  BOT: 1,
});

export const bezierDir = (side) => (side === Side.TOP ? 1 : -1);

export const getSvgInfo = (ntop, nbot, height) => ({
  width: ssDisp * Math.max(ntop, nbot),
  height: ssDisp * height,
  vieww: ssSvg * Math.max(ntop, nbot),
  viewh: ssSvg * height,
});

export const DiagramInfo = class {
  constructor(ntop, nbot, height) {
    this.height = height;
    this.ntop = ntop;
    this.nbot = nbot;
  }

  posV(side) {
    if (side === Side.TOP) return 0;
    else if (side === Side.BOT) return ssSvg * this.height;
    return undefined;
  }

  posH(n, side) {
    // Leaving space to center the dots if we want (need input of ntop and nbot)
    if (side === Side.TOP) {
      return ssSvg / 2 + ssSvg * (n - 1);
    } else if (side === Side.BOT) {
      return ssSvg / 2 + ssSvg * (n - 1);
    }
    return undefined;
  }

  getPath(sNum, sSide, eNum, eSide, stretch = 1) {
    return (
      `M ${this.posH(sNum, sSide)} ${this.posV(sSide)} ` +
      `C ${this.posH(sNum, sSide)} ${
        this.posV(sSide) + bezierDir(sSide) * bezierDist * stretch
      }, ` +
      `${this.posH(eNum, eSide)} ${
        this.posV(eSide) + bezierDir(eSide) * bezierDist * stretch
      }, ` +
      `${this.posH(eNum, eSide)} ${this.posV(eSide)}`
    );
  }
};
