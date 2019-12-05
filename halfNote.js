class HalfNote{
  constructor(_xPos,_yPos){
    this.xPos = _xPos;
    this.yPos = _yPos;
  }
  display(){
    push();
    translate(this.xPos,this.yPos);
    strokeWeight(4);
    stroke(0);
    fill(0);
    rect(52.5,-75,15,112.5);
    fill(255);
    ellipse(37.5,37.5,60,50);
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
