
 var canvas;
function windowResized(){
  resizeCanvas(outerWidth, 750, WEBGL);
}
let img;
function setup() {
  canvas = createCanvas(outerWidth, 750, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index','-9999999');
  imgTri = loadImage('/fotos/tri.png');
  imgCircle = loadImage('/fotos/circle.png');
  imgRect = loadImage('/fotos/rect.png');
  imgX = loadImage('/fotos/x.png');
}

function draw() {
background('#454540');
noStroke();



  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);
  //////
  //clear();
  //////

  push();
  translate(-width / 2.5, -height / 3, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(imgTri);
  box(100);
  pop();


  push();
  translate(+width / 2.5, -height / 3, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(imgCircle);
  box(100);
  pop();


  push();
  translate(-width / 2.5, height / 3, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(imgRect);
  box(100);
  pop();


  push();
  translate(width / 2.5, height / 3, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(imgX);
  box(100);
  pop();
}
