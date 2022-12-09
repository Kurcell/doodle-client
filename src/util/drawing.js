const canvasFunctions = ["startStroke", "endStroke", "draw"];

export const stroke = (fn, ctx, x, y) => {
  if (fn === canvasFunctions[0]) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else if (fn === canvasFunctions[1]) {
    ctx.closePath();
    ctx.restore();
  } else if (fn === canvasFunctions[2]) {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};
