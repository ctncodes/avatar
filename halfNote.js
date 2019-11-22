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
    rect(width*7/80,-height/8,width/40,height*3/16);
    fill(255);    
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