class TailFeatherPattern{
  constructor(_xPos,_yPos){
    this.xPos = _xPos;
    this.yPos = _yPos;
  }
  display(){
    push();
    translate(this.xPos,this.yPos);
    ellipseMode(RADIUS);
    fill(255,147,44);
    ellipse(width*0,height*0,width/16,height/16);
    ellipseMode(CENTER);
    fill(0,105,62);
    ellipse(width*0,height*0,width/16,height/16);
    pop;
  }
}