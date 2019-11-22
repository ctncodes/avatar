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
    ellipse(width/16,height/16,width/10,height/12);
    pop();
  }
  move(){
    if (this.xPos <= height*1.35){
    this.xPos++;
    } else {
      this.xPos = -height*1.35;
    }
  }
}