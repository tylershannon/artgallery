//control point count
let formResolution = 9;
//step size
let stepSize = 10;
let rStepSize = 20;
let rotationStepSize = 1;
//distortionFactor
let distortionFactor = 1;
//overall size of animation
let initRadius = 50;
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
let initStroke = .000001;

function setup() {
  createCanvas(windowWidth-100, windowHeight-100);
  smooth();
  background(0);

  centerX = (windowWidth-100)/2;
  centerY = (windowHeight-150)/2;

  x = centerX;
  y = centerY;
  r = initRadius;

}

function draw() {
  r = initRadius+random(-rStepSize, rStepSize);
  x += random(-r,r);
  if (x<0) {
    x+=random(0,r);
  }
  if (x>windowWidth){
    x+=random(-r,0);
  }
  y += random(-r, r);
  if (y<0) {
    y+=random(0,r);
  }
  if (y>windowHeight){
    y+=random(-r,0);
  }
  rotation = random(-rotationStepSize, rotationStepSize);
  initStroke += .001;


  strokeWeight(initStroke);
  stroke(255);
  fill(0);
  translate(x, y);
  angleMode(DEGREES)
  rotate(rotation);
  square(0, 0, r);

  a -= 0.05;
  console.log(a);

  if (a<1) {
    noLoop();
  }

}
