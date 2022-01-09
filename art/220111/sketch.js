//control point count
let formResolution = 9;
//step size
let stepSize = 20;
//distortionFactor
let distortionFactor = 1;
//overall size of animation
let initRadius = 150;
//init center parameters
let centerX, centerY;
//init emptyy lists with lengths equal to form res
let x = [];
let y = []
//define end of animation
let a = 100;
//not used?
let filled = true;
let freeze = true;

function setup() {
  createCanvas(windowWidth-100, windowHeight-100);
  smooth();
  background(0);

  centerX = windowWidth/2-150;
  centerY = windowHeight/2-100;

  let angle = radians(360/formResolution);

  for (let i=0; i<formResolution; i++) {
    x[i] = i;
    y[i] = i;
  }

}

function draw() {
  initRadius += 3;

  for (let i=0; i<formResolution; i++) {
    x[i] += random(-stepSize, stepSize);
    y[i] += random(-stepSize, stepSize);
  }

  strokeWeight(stepSize/10);
  stroke(255,a/4);
  noFill();

  beginShape();
  curveVertex(x[formResolution-1]+centerX, y[formResolution-1]+centerY);
  for (let i=0; i<formResolution-5; i++) {
    curveVertex(x[i]+centerX, y[i]+centerY);
  }
  //curveVertex(x[1]+centerX, y[1]+centerY);
  //curveVertex(x[formResolution-1]+centerX, y[formResolution-1]+centerY);
  //curveVertex(x[formResolution]+centerX, y[formResolution]+centerY);
  endShape(CLOSE);

  a -= 0.05;

  if (a==1) {
    noLoop();
  }

}
