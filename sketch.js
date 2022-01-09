let sliderCount;
let sliderCountX, sliderCountY, sliderCountWidth;
let sliderRadius, sliderPadding;
let r1, r2, r3, r4, rX, rY;

function setup() {
  createCanvas(windowWidth-100, windowHeight-100);


  sliderCount = createSlider(1,500,10);
  sliderCountX = 20;
  sliderCountY = 40;
  sliderCountWidth = 80;
  sliderPadding = 50;
  sliderCount.position(sliderCountX, sliderCountY);
  sliderCount.style('width', `${sliderCountWidth}px`);

  sliderRadius = createSlider(10, 1000, 10);
  sliderRadius.position(sliderCountX+sliderCountWidth+sliderPadding, sliderCountY);
  sliderRadius.style('width', `${sliderCountWidth}px`);


}

function draw() {
  background(220);

  const sliderCountValue = sliderCount.value();
  text(sliderCountValue, sliderCountWidth+15, sliderCountY+5);
  text("Shape Count", sliderCountX, sliderCountY-10);

  const sliderRadiusValue = sliderRadius.value();
  text(sliderRadiusValue, sliderCountX+sliderCountWidth+sliderPadding+sliderCountWidth+15, sliderCountY+5);
  text("Shape Radius", sliderCountX+sliderCountWidth+sliderPadding, sliderCountY-10);

  r1 = random(sliderRadiusValue-5);
  r2 = random(sliderRadiusValue-5);
  r3 = random(-1,1);
  r4 = random(-1,1);
  rX = r1*r3;
  rY = r2*r4;

  for (let i = 0; i<sliderCountValue; i++) {
    console.log(i);
    stroke(50)
    let shapeRadius = sliderRadiusValue

    square(windowWidth/2+rX, windowHeight/2+rX, shapeRadius);
  }


}
