let northX, westY, musicNote1, musicNote2, musicNote3, musicNote4, rt1, art2, art3, art4;
let eagleEye1, eagleEye2, eagleEye3, eagleEye4, eagleEye5, eagleEye6, eagleEye7, eagleEye8, eagleEye9, eagleEye10, eagleEye11;
function preload() {
  soundFormats('mp3');
  disneyPixarsToyStory = loadSound("assets/Toy Story 2 - You've Got A Friend in Me (Wheezy's version)");
  disneysHercules = loadSound("assets/Hercules - The End.mp3");
  disneyPixarsMonstersInc = loadSound("assets/Monsters, Inc. - Put that thing back where it came from, or so help me!.mp3");
  disneySquareEnixsKH = loadSound("assets/The Afternoon Streets.mp3");
  disneysPotC = loadSound("assets/Pirates of the Caribbean - At World's End - Hoist the Colours.mp3");
  disneysBigHero6 = loadSound("assets/Big Hero 6 - Immortals.mp3");
  prSong1 = loadSound("assets/Peacock Dance Display - Sound 1.mp3");
  prSong2 = loadSound("assets/Peacock Dance Display - Sound 2.mp3");
  prSong3 = loadSound("assets/Peacock Dance Display - Sound 3.mp3");
  prSong4 = loadSound("assets/Peacock Dance Display - Sound 4.mp3");
  prSong5 = loadSound("assets/Peacock Dance Display - Sound 5.mp3");
  prSong6 = loadSound("assets/Peacock Dance Display - Sound 6.mp3");
  prSong7 = loadSound("assets/Peacock Dance Display - Sound 7.mp3");
}
function setup() {
  noCursor();
  art1 = loadImage("assets/At World's End At Night.png");
  art2 = loadImage("assets/Twilight Town At Twilight.png");
  art3 = loadImage("assets/Hercules At Morning.png");
  art4 = loadImage("assets/Toy Story At Daytime.png");
  art5 = loadImage("assets/Big Hero 6 At Evening.png");
  art6 = loadImage("assets/Monsters, Inc. At Night 2.png");
  createCanvas(windowWidth,windowHeight);
  musicNote1 = new BeamedNote(300,225);
  musicNote2 = new WholeNote(75,75);
  musicNote3 = new HalfNote(37.5,375);
  musicNote4 = new QuarterNote(225,525);
  eagleEye1 = new TailFeatherPattern(46.875,121.875);
  eagleEye2 = new TailFeatherPattern(46.875,215.625);
  eagleEye3 = new TailFeatherPattern(131.25,75);
  eagleEye4 = new TailFeatherPattern(131.25,168.75);
  eagleEye5 = new TailFeatherPattern(131.25,262.5);
  eagleEye6 = new TailFeatherPattern(215.625,121.875);
  eagleEye7 = new TailFeatherPattern(215.625,215.625);
  eagleEye8 = new TailFeatherPattern(300,168.75);
  eagleEye9 = new TailFeatherPattern(300,262.5);
  eagleEye10 = new TailFeatherPattern(-37.5,168.75);
  eagleEye11 = new TailFeatherPattern(-37.5,262.5);
}
function draw() {
  northX=mouseX;
  westY=mouseY;
  noStroke();
  drawTheMorning(northX,westY);
  push();
  translate(windowWidth/2 - 300, windowHeight - 450);
  drawBeautifulBody();
  drawBeautifulMind();
  if (key == '1' || key == '2' || key == '3' || key == '4' || key == '5' || key == '6' || key == '7') {
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
  }
  pop();
  drawMusicStaff();
  // musicNote1.display();
  // musicNote1.move();
  // musicNote2.display();
  // musicNote2.move();
  // musicNote3.display();
  // musicNote3.move();
  // musicNote4.display();
  // musicNote4.move();
}
function drawTheMorning(xPos,yPos) {
  if (mouseX <= width/7) {
    background(art1);
  } else if (mouseX > width/7 && mouseX <= width*2/7) {
    background(art2);
  } else if (mouseX > width*2/7 && mouseX <= width*3/7) {
    background(art3);
  } else if (mouseX > width*3/7 && mouseX <= width*4/7) {
    background(art4);
  } else if (mouseX > width*4/7 && mouseX <= width*5/7) {
    background(art5);
  } else if (mouseX > width*5/7 && mouseX <= width*6/7) {
    background(art2);
  } else {
    background(art6);
  }
  if (mouseY<height/3) {
    fill(255,204,51);
  } else if (mouseY>height*2/3) {
    fill(255,90,37);
  } else  {
    fill(255,147,44);
  }
  circle(xPos,yPos,112.5);
}
function drawBeautifulBody() {
  //Tailfeathers
  fill(72,61,139);
  noStroke();
  arc(131.25,300,525,525,PI,2*PI);
  //Body
  fill(111,78,55);
  noStroke();
  arc(300,300,337.5,300,0,PI);
  //Right Wing
  fill(0,71,171);
  noStroke();
  arc(300,300,225,225,0,PI);
  eagleEye1.display();
  eagleEye2.display();
  eagleEye3.display();
  eagleEye4.display();
  eagleEye5.display();
  eagleEye6.display();
  eagleEye7.display();
  eagleEye8.display();
  eagleEye9.display();
  eagleEye10.display();
  eagleEye11.display();
}
function drawBeautifulMind() {
  //Comb
  fill(227,38,54);
  beginShape();
  curveVertex(465,120);
  curveVertex(465,120);
  curveVertex(465,42);
  curveVertex(435,42);
  curveVertex(435,120);
  curveVertex(435,120);
  curveVertex(435,30);
  curveVertex(405,30);
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
  //Eyes
  fill(0);
  circle(420,105,24);
  circle(450,105,24);
}
function drawPedestal() {
  fill(72,6,7);
  rect(75,450,450,30);
  rect(131.25,480,337.5,120);
  fill(165,42,42);
  square(150,480,120);
  square(330,480,120);
}
function drawMusicStaff() {
  strokeWeight(5);
  stroke("#B24D40");
  fill("#C9B665");
  rect(0,height/2-150,width,20);
  rect(0,height/2-80,width,20);
  rect(0,height/2-10,width,20);
  rect(0,height/2+60,width,20);
  rect(0,height/2+130,width,20);
  rect(0,height/2-150,10,300);
  rect(width-10,height/2-150,10,300);
  rect(width/2-5,height/2-150,10,300);
  rect(width/4-5,height/2-150,10,300);
  rect(width*3/4-5,height/2-150,10,300);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function keyTyped() {
  if (mouseX <= width/7) {
    if (key === '1') {
      prSong1.setVolume(0.25);
      prSong1.loop();
    } else if (key === 'a') {
      prSong1.stop();
    }
  } else if (mouseX > width/7 && mouseX <= width*2/7) {
    if (key === '2') {
      prSong2.setVolume(0.35);
      prSong2.loop();
    } else if (key === 'b') {
      prSong2.stop();
    }
  } else if (mouseX > width*2/7 && mouseX <= width*3/7) {
    if (key === '3') {
      prSong3.setVolume(0.35);
      prSong3.loop();
    } else if (key === 'c') {
      prSong3.stop();
    }
  } else if (mouseX > width*3/7 && mouseX <= width*4/7) {
    if (key === '4') {
      prSong4.setVolume(0.35);
      prSong4.loop();
    } else if (key === 'd') {
      prSong4.stop();
    }
  } else if (mouseX > width*4/7 && mouseX <= width*5/7) {
    if (key === '5') {
      prSong5.setVolume(0.25);
      prSong5.loop();
    } else if (key === 'e') {
      prSong5.stop();
    }
  } else if (mouseX > width*5/7 && mouseX <= width*6/7) {
    if (key === '6') {
      prSong6.setVolume(0.35);
      prSong6.loop();
    } else if (key === 'f') {
      prSong6.stop();
    }
  } else {
    if (key === '7') {
      prSong7.setVolume(0.5);
      prSong7.loop();
    } else if (key === 'g') {
      prSong7.stop();
    }
  }
}

// function mousePressed() {
//   if (mouseX <= width/7) {
//       disneysPotC.setVolume(0.375);
//       disneysPotC.loop();
//     } else if (mouseX > width/7 && mouseX <= width*2/7) {
//       disneysPotC.stop();
//   }
//   if (mouseX > width/7 && mouseX <= width*2/7) {
//       disneySquareEnixsKH.setVolume(0.525);
//       disneySquareEnixsKH.play();
//     } else if (mouseX > width*2/7 && mouseX <= width*3/7) {
//       disneySquareEnixsKH.stop();
//   }
//   if (mouseX > width*2/7 && mouseX <= width*3/7) {
//       disneysHercules.setVolume(0.525);
//       disneysHercules.play();
//     } else if (mouseX > width*3/7 && mouseX <= width*4/7) {
//       disneysHercules.stop();
//   }
//   if (mouseX > width*3/7 && mouseX <= width*4/7) {
//       disneyPixarsToyStory.setVolume(0.525);
//       disneyPixarsToyStory.play();
//     } else if (mouseX > width*4/7 && mouseX <= width*5/7) {
//       disneyPixarsToyStory.stop();
//   }
//   if (mouseX > width*4/7 && mouseX <= width*5/7) {
//       disneysBigHero6.setVolume(0.375);
//       disneysBigHero6.play();
//     } else if (mouseX > width*5/7 && mouseX <= width*6/7) {
//       disneysBigHero6.stop();
//   }
//   if (mouseX > width*5/7 && mouseX <= width*6/7) {
//       disneySquareEnixsKH.setVolume(0.525);
//       disneySquareEnixsKH.play();
//     } else if (mouseX > width*6/7) {
//       disneySquareEnixsKH.stop();
//   }
//   if (mouseX > width*6/7) {
//       disneyPixarsMonstersInc.setVolume(0.75);
//       disneyPixarsMonstersInc.play();
//     } else if (mouseX <= width/7) {
//       disneyPixarsMonstersInc.stop();
//   }
// }
