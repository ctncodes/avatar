class BeamedNote{
  constructor(_xPos,_yPos){
    this.xPos = _xPos;
    this.yPos = _yPos;
  }
  display(){
    push();
    noStroke();
    fill(255);
    translate(this.xPos,this.yPos);
    ellipse(37.5,37.5,60,50);
    ellipse(131.25,37.5,60,50);
    rect(52.5,-75,108.75,50);
    rect(52.5,-75,15,112.5);
    rect(146.25,-75,15,112.5);
    pop();
  }
  move(){
    if (this.xPos <= height*2){
    this.xPos++;
    } else {
      this.xPos = -height*1;
    }
  }
}
