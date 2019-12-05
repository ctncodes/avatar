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
    ellipse(0,0,37.5,37.5);
    ellipseMode(CENTER);
    fill(0,105,62);
    ellipse(0,0,37.5,37.5);
    pop();
  }
}
