class WholeNote{
  constructor(_xPos,_yPos){
    this.xPos = _yPos;
    this.yPos = _yPos;
  }
  display(){
    push();
    strokeWeight(6);
    stroke(0);
    noFill();
    translate(this.xPos,this.yPos);
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
