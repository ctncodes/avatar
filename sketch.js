let northX, westY;
// var mic;
let eagleEye1, eagleEye2, eagleEye3, eagleEye4, eagleEye5, eagleEye6, eagleEye7, eagleEye8, eagleEye9;
let musicNote1, musicNote2, musicNote3, musicNote4;
let art1, art2, art3, art4;
function setup() {
  art1 = loadImage('assets/Starry Night, by Vincent Van Gogh.png');
  art2 = loadImage('assets/The Scream, by Edvard Munch.png');
  art3 = loadImage('assets/Landscape Near Murnau, by Alexej von Jawlensky.png');
  art4 = loadImage('assets/Varoom!, by Roy Lichtenstein.png');
  createCanvas(600,600);
  musicNote1 = new BeamedNote(300,225);
  musicNote2 = new WholeNote(75,75);
  musicNote3 = new HalfNote(37.5,375);
  musicNote4 = new QuarterNote(225,525);
  // mic = new p5.AudioIn()
  eagleEye1 = new TailFeatherPattern(width*5/64,height*13/64);
  eagleEye2 = new TailFeatherPattern(width*5/64,height*23/64);
  eagleEye3 = new TailFeatherPattern(width*7/32,height/8);
  eagleEye4 = new TailFeatherPattern(width*7/32,height*9/32);
  eagleEye5 = new TailFeatherPattern(width*7/32,height*7/16);
  eagleEye6 = new TailFeatherPattern(width*23/64,height*13/64);
  eagleEye7 = new TailFeatherPattern(width*23/64,height*23/64);
  eagleEye8 = new TailFeatherPattern(width/2,height*9/32);
  eagleEye9 = new TailFeatherPattern(width/2,height*7/16);
  // mic.start();
}
function draw() {
  northX=mouseX;
  westY=mouseY;
  // micLevel = mic.getLevel(.9);
  drawTheMorning(northX,westY);
  if (mouseIsPressed == true) {
    background(art4);
  }
  drawBeautifulBody();
  drawBeautifulMind();
  drawPedestal();
  if (mouseIsPressed == true) {
    //Waddle
    fill(227,38,54);
    beginShape();
    curveVertex(468,198);
    curveVertex(468,198);
    curveVertex(468,240);
    curveVertex(492,234);
    curveVertex(468,198);
    curveVertex(468,198);
    endShape();
    //Beak
    fill(218,165,32);
    triangle(468,120,468,150,528,150);
    triangle(468,210,468,180,528,180);
    //Open Beak
    fill(0);
    rect(468,150,8,30);
  } else {
    //Waddle
    fill(227,38,54);
    beginShape();
    curveVertex(468,168);
    curveVertex(468,168);
    curveVertex(468,210);
    curveVertex(492,204);
    curveVertex(468,168);
    curveVertex(468,168);
    endShape();
    //Beak
    fill(218,165,32);
  triangle(468,120,468,180,528,150);
  musicNote1.display();
  musicNote1.move();
  musicNote2.display();
  musicNote2.move();
  musicNote3.display();
  musicNote3.move();
  musicNote4.display();
  musicNote4.move();
  }
}
function drawTheMorning(xPos,yPos) {
  // if (constrain(height-micLevel*height*5,0,height)<height/3) {
  //   fill(255,204,51);
  //   background(135,206,235);
  // } else if (constrain(height-micLevel*height*5,0, height)>height*2/3) {
  //   fill(255,90,37);
  //   background(25,25,112);
  // } else {
  //   fill(255,147,44);
  //   background(80,116,174);
  // }
  // circle(487.5,constrain(height-micLevel*height*5,0, height),225);
  if (mouseY<height/3) {
    fill(255,204,51);
    // background(135,206,235);
    background(art3);
  } else if (mouseY>height*2/3) {
    fill(255,90,37);
    // background(25,25,112);
    background(art1);
  } else  {
    fill(255,147,44);
    // background(80,116,174);
    background(art2);
  }
  circle(xPos,yPos,112.5);
}
function drawBeautifulBody() {
  //Tailfeathers
  fill(72,61,139);
  noStroke();
  arc(131.25,300,525,525,PI,2*PI);
  // ellipseMode(RADIUS);
  // fill(255);
  // ellipse(131.25,75,37.5,37.5);
  // ellipseMode(CENTER);
  // fill(100);
  // ellipse(131.25,75,37.5,37.5);
  // //Left Wing
  // fill(0,71,171);
  // noStroke();
  // arc(525,300,225,225,0,PI);
  //Body
  fill(111,78,55);
  noStroke();
  arc(300,300,337.5,300,0,PI);
  //Right Wing
  fill(0,71,171);
  noStroke();
  arc(width/2,height/2,width*3/8,height*3/8,0,PI);
  eagleEye1.display();
  eagleEye2.display();
  eagleEye3.display();
  eagleEye4.display();
  eagleEye5.display();
  eagleEye6.display();
  eagleEye7.display();
  eagleEye8.display();
  eagleEye9.display();
}
function drawBeautifulMind() {
  //Comb
  fill(227,38,54);
  beginShape();
  curveVertex(465,120);
  curveVertex(465,120);
  curveVertex(465,42);
  curveVertex(435,42);
  // curveVertex(435,120);
  // curveVertex(435,120);
  // endShape();
  // beginShape();
  curveVertex(435,120);
  curveVertex(435,120);
  curveVertex(435,30);
  curveVertex(405,30);
  // curveVertex(405,120);
  // curveVertex(405,120);
  // endShape();
  // beginShape();
  curveVertex(405,120);
  curveVertex(405,120);
  curveVertex(405,42);
  curveVertex(375,42);
  curveVertex(375,120);
  curveVertex(375,120);
  endShape();
  //Head
  fill(0,106,78);
  beginShape();
  curveVertex(468.75,300);
  curveVertex(468.75,300);
  curveVertex(468.75,90);
  curveVertex(375,90);
  curveVertex(375,300);
  curveVertex(375,300);
  endShape();
  // //Waddle
  // fill(227,38,54);
  // beginShape();
  // curveVertex(468,168);
  // curveVertex(468,168);
  // curveVertex(468,210);
  // curveVertex(492,204);
  // curveVertex(468,168);
  // curveVertex(468,168);
  // endShape();
  // //Beak
  // fill(218,165,32);
  // triangle(468,120,468,180,528,150);
  //Eyes
  fill(0);
  circle(420,105,24);
  circle(450,105,24);
}
function drawPedestal() {
  //Pedestal
  fill(72,6,7);
  rect(75,450,450,30);
  rect(131.25,480,337.5,120);
  fill(165,42,42);
  square(150,480,120);
  square(330,480,120);
}
