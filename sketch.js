let northX;
let westY;
// var mic;
let musicNote1;
let musicNote2;
let musicNote3;
let musicNote4;
let art1;
let art2;
let art3;
let art4;
function setup() {
  art1 = loadImage('assets/Starry Night, by Vincent Van Gogh.png');
  art2 = loadImage('assets/The Scream, by Edvard Munch.png');
  art3 = loadImage('assets/Landscape Near Murnau, by Alexej von Jawlensky.png');
  art4 = loadImage('assets/Varoom!, by Roy Lichtenstein.png');
  createCanvas(600,600);
  musicNote1 = new BeamedNote(width/2,height*3/8);
  musicNote2 = new WholeNote(width/8,height/8);
  musicNote3 = new HalfNote(width/16,height*5/8);
  musicNote4 = new QuarterNote(width*3/8,height*7/8);
  // console.log(musicNote3);
  // mic = new p5.AudioIn()
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
    curveVertex(width*.78,height*.33);
    curveVertex(width*.78,height*.33);
    curveVertex(width*.78,height*.4);
    curveVertex(width*.82,height*.39);
    curveVertex(width*.78,height*.33);
    curveVertex(width*.78,height*.33);
    endShape();
    //Beak
    fill(218,165,32);
  triangle(width*.78,height/5,width*.78,height/4,width*.88,height/4);   triangle(width*.78,height*.35,width*.78,height*.3,width*.88,height*.3);
    //Open Mouth
    fill(0);
    rect(width*.78,height/4,width/80,height/20);
  } else {
    //Waddle
    fill(227,38,54);
    beginShape();
    curveVertex(width*.78,height*.28);
    curveVertex(width*.78,height*.28);
    curveVertex(width*.78,height*.35);
    curveVertex(width*.82,height*.34);
    curveVertex(width*.78,height*.28);
    curveVertex(width*.78,height*.28);
    endShape();
    //Beak
    fill(218,165,32);
  triangle(width*.78,height/5,width*.78,height*.3,width*.88,height/4);
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
  // circle(width*13/16,constrain(height-micLevel*height*5,0, height),width*3/8);
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
  circle(xPos,yPos,width*3/16 );
}
function drawBeautifulBody() {
  //Tailfeathers
  fill(82,40,168);
  noStroke();
  arc(width*7/32,height/2,width*7/8,height*7/8,PI,2*PI);
  // ellipseMode(RADIUS);
  // fill(255);
  // ellipse(width*7/32,height/8,width/16,height/16);
  // ellipseMode(CENTER);
  // fill(100);
  // ellipse(width*7/32,height/8,width/16,height/16);
  // //Left Wing
  // fill(0,71,171);
  // noStroke();
  // arc(width*7/8,height/2,width*3/8,height*3/8,0,PI);
  //Body
  fill(111,78,55);
  noStroke();
  arc(width/2,height/2,width*9/16,height/2,0,PI);
  //Right Wing
  fill(0,71,171);
  noStroke();
  arc(width/2,height/2,width*3/8,height*3/8,0,PI);
  ellipseMode(RADIUS);
  fill(255,147,44);
  ellipse(width*5/64,height*13/64,width/16,height/16);
  ellipseMode(CENTER);
  fill(0,105,62);
  ellipse(width*5/64,height*13/64,width/16,height/16);
  ellipseMode(RADIUS);
  fill(255,147,44);
  ellipse(width*5/64,height*23/64,width/16,height/16);
  ellipseMode(CENTER);
  fill(0,105,62);
  ellipse(width*5/64,height*23/64,width/16,height/16);
  ellipseMode(RADIUS);
  fill(255,147,44);
  ellipse(width*7/32,height/8,width/16,height/16);
  ellipseMode(CENTER);
  fill(0,105,62);
  ellipse(width*7/32,height/8,width/16,height/16);
  ellipseMode(RADIUS);
  fill(255,147,44);
  ellipse(width*7/32,height*9/32,width/16,height/16);
  ellipseMode(CENTER);
  fill(0,105,62);
  ellipse(width*7/32,height*9/32,width/16,height/16);
  ellipseMode(RADIUS);
  fill(255,147,44);
  ellipse(width*7/32,height*7/16,width/16,height/16);
  ellipseMode(CENTER);
  fill(0,105,62);
  ellipse(width*7/32,height*7/16,width/16,height/16);
  ellipseMode(RADIUS);
  fill(255,147,44);
  ellipse(width*23/64,height*13/64,width/16,height/16);
  ellipseMode(CENTER);
  fill(0,105,62);
  ellipse(width*23/64,height*13/64,width/16,height/16);
  ellipseMode(RADIUS);
  fill(255,147,44);
  ellipse(width*23/64,height*23/64,width/16,height/16);
  ellipseMode(CENTER);
  fill(0,105,62);
  ellipse(width*23/64,height*23/64,width/16,height/16);
  ellipseMode(RADIUS);
  fill(255,147,44);
  ellipse(width/2,height*9/32,width/16,height/16);
  ellipseMode(CENTER);
  fill(0,105,62);
  ellipse(width/2,height*9/32,width/16,height/16);
  ellipseMode(RADIUS);
  fill(255,147,44);
  ellipse(width/2,height*7/16,width/16,height/16);
  ellipseMode(CENTER);
  fill(0,105,62);
  ellipse(width/2,height*7/16,width/16,height/16);
}
function drawBeautifulMind() {
  //Comb
  fill(227,38,54);
  beginShape();
  curveVertex(width*.775,height*.2);
  curveVertex(width*.775,height*.2);
  curveVertex(width*.775,height*.07);
  curveVertex(width*.725,height*.07);
  // curveVertex(width*.725,height*.2);
  // curveVertex(width*.725,height*.2);
  // endShape();
  // beginShape();
  curveVertex(width*.725,height*.2);
  curveVertex(width*.725,height*.2);
  curveVertex(width*.725,height*.05);
  curveVertex(width*.675,height*.05);
  // curveVertex(width*.675,height*.2);
  // curveVertex(width*.675,height*.2);
  // endShape();
  // beginShape();
  curveVertex(width*.675,height*.2);
  curveVertex(width*.675,height*.2);
  curveVertex(width*.675,height*.07);
  curveVertex(width*.625,height*.07);
  curveVertex(width*.625,height*.2);
  curveVertex(width*.625,height*.2);
  endShape();
  //Head
  fill(0,106,78);
  beginShape();
  curveVertex(width*25/32,height/2);
  curveVertex(width*25/32,height/2);
  curveVertex(width*25/32,height*0.15);
  curveVertex(width*5/8,height*0.15);
  curveVertex(width*5/8,height/2);
  curveVertex(width*5/8,height/2);
  endShape();
  // //Waddle
  // fill(227,38,54);
  // beginShape();
  // curveVertex(width*.78,height*.28);
  // curveVertex(width*.78,height*.28);
  // curveVertex(width*.78,height*.35);
  // curveVertex(width*.82,height*.34);
  // curveVertex(width*.78,height*.28);
  // curveVertex(width*.78,height*.28);
  // endShape();
  // //Beak
  // fill(218,165,32);
  // triangle(width*.78,height/5,width*.78,height*.3,width*.88,height/4);
  //Eyes
  fill(0);
  circle(width*7/10,height*7/40,width/25);
  circle(width*3/4,height*7/40,width/25);
}
function drawPedestal() {
  //Pedestal
  fill(72,6,7);
  rect(width/8,height*3/4,width*3/4,height/20);
  rect(width*7/32,height*0.8,width*9/16,height/5);
  fill(165,42,42);
  square(width*.25,height*0.8,width*.2);
  square(width*.55,height*0.8,width*.2);
}