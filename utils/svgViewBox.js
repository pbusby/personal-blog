const svg = document.querySelector('svg');

const { xMin, xMax, yMin, yMax } = [...svg.children].reduce((acc, el) => {
  const { x, y, width, height } = el.getBBox();
  if (!acc.xMin || x < acc.xMin) acc.xMin = x;
  if (!acc.xMax || x + width > acc.xMax) acc.xMax = x + width;
  if (!acc.yMin || y < acc.yMin) acc.yMin = y;
  if (!acc.yMax || y + height > acc.yMax) acc.yMax = y + height;
  return acc;
}, {});

const viewbox = `${Math.floor(xMin)} ${Math.floor(yMin)} ${Math.floor(xMax) - Math.floor(xMin)} ${Math.floor(yMax) - Math.floor(yMin)}`;
console.log(viewbox);
svg.setAttribute('viewBox', viewbox);