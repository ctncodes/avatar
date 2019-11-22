class BeamedNote{
  constructor(_xPos,_yPos){
    this.xPos = _xPos;
    this.yPos = _yPos;
  }
  display(){
    push();
    noStroke();    
    fill(0);
    translate(this.xPos,this.yPos);
    ellipse(width/16,height/16,width/10,height/12);
    ellipse(width*35/160,height/16,width/10,height/12);
    rect(width*7/80,-height/8,width*29/160,height/12);
    rect(width*7/80,-height/8,width/40,height*3/16);
    rect(width*39/160,-height/8,width/40,height*3/16);
    pop();
  }
  move(){
    if (this.xPos <= height*1.35){
    this.xPos++;
    } else {
      this.xPos = -height*.35;
    }
  }
}