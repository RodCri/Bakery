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
const chefCanvas = document.querySelector('#chef');
if (chefCanvas && chefCanvas.getContext) {
  let context = chefCanvas.getContext('2d');
  if (context) {
    let X = 250;
    let Y = 260;
    let r = 220;
    let aPartida = 0.5 * Math.PI + 0.6;
    let aFinal = 1.5 * Math.PI -0.5;
    context.strokeStyle = '#464646';
    context.lineWidth = 10;
    context.arc(X, Y, r, aPartida, aFinal);
    context.stroke();
  }
}
const discoverCanvas = document.querySelector('#discover');
if (discoverCanvas && discoverCanvas.getContext) {
  let context = discoverCanvas.getContext('2d');
  if (context) {
    let X = 200;
    let Y = 270;
    let r = 190;
    let aPartida = 1.5 * Math.PI +0.4;
    let aFinal = 0.5 * Math.PI - 0.7;
    context.strokeStyle = '#464646';
    context.lineWidth = 10;
    context.arc(X, Y, r, aPartida, aFinal);
    context.stroke();
  }
}

const swipper = document.querySelector('.mySwiper');
addEventListener("resize", (event) => {
  let w = window.innerWidth;
  if(w<=900){
    swipper.passedParams.slidesPerView = 3;
    
  }else if(w>900){
    swipper.style.backgroundColor = "#fff"
    swipper.passedParams.slidesPerView = 2;
  }
});

let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});