//control point count
let formResolution = 9;
//step size
let stepSize = 2;
let rStepSize = 10;
//distortionFactor
let distortionFactor = 1;
//overall size of animation
let initRadius = 150;
//init center parameters
let centerX, centerY;
//init emptyy lists with lengths equal to form res
let x;
let y;
let r;
//define end of animation
let a = 100;
//not used?
let filled = true;
let freeze = true;

function setup() {
  createCanvas(windowWidth-100, windowHeight-100);
  smooth();
  background(200,100, 55);

  centerX = windowWidth/2-100;
  centerY = windowHeight/2-150;

  let angle = radians(360/formResolution);

  x = centerX;
  y = centerY;
  r = initRadius;

}

function draw() {
  r += random(-rStepSize, rStepSize);
  if (r<0){
    r = r*-1
  }

  x += random(-stepSize, stepSize);
  y += random(-stepSize, stepSize);

  strokeWeight(stepSize/2);
  stroke(255,a/4);
  noFill();

  square(x, y, r, r/4,r/4,r/4,r/4);

  a -= 0.05;

  if (a==1) {
    noLoop();
  }

}
