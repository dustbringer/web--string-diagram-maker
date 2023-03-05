const round = (value, decimals) => {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
};

const toTikz = (width, height, dots, lines, scale = 1) => {
  const convX = (x) => round(scale * x, 2);
  const convY = (y) => round(scale * (height - y), 2); // because positive y is flipped in tikz vs svg

  let content = "\n\\path\n";
  lines.forEach((l) => {
    content += `(${convX(l.x1)},${convY(l.y1)}) edge[string=red] (${convX(
      l.x2
    )},${convY(l.y2)})\n`;
  });
  content += ";\n%\n";

  dots.forEach((d) => {
    content += `\\node [enddot=red] at (${convX(d.x)},${convY(d.y)}) {};\n`;
  });

  return `\\tikz[scale=0.4]{${content}}`;
};

export default toTikz;
