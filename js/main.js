const topCanvas = document.querySelector('#top');
if (topCanvas && topCanvas.getContext) {
  let context = topCanvas.getContext('2d');
  if (context) {
    let X = 198;
    let Y = 198;
    let r = 194;
    let aPartida = Math.PI;
    let aFinal = 2 * Math.PI - 0.5;
    context.strokeStyle = '#464646';
    context.lineWidth = 10;
    context.arc(X, Y, r, aPartida, aFinal);
    context.stroke();
  }
}
const rightCanvas = document.querySelector('#right');
if (rightCanvas && rightCanvas.getContext) {
  let context = rightCanvas.getContext('2d');
  if (context) {
    let X = 198;
    let Y = 198;
    let r = 194;
    let aPartida = 1.5 * Math.PI + 0.5;
    let aFinal = 0.5 * Math.PI;
    context.strokeStyle = '#464646';
    context.lineWidth = 10;
    context.arc(X, Y, r, aPartida, aFinal);
    context.stroke();
  }
}
const leftCanvas = document.querySelector('#left');
if (leftCanvas && leftCanvas.getContext) {
  let context = leftCanvas.getContext('2d');
  if (context) {
    let X = 198;
    let Y = 198;
    let r = 194;
    let aPartida = 0.5 * Math.PI;
    let aFinal = 1.5 * Math.PI - 0.5;
    context.strokeStyle = '#464646';
    context.lineWidth = 10;
    context.arc(X, Y, r, aPartida, aFinal);
    context.stroke();
  }
}