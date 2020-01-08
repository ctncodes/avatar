class MusicStaff{
  constructor(_xPos,_yPos){
    this.xPos = _xPos;
    this.yPos = _yPos;
  }
  display(){
    push();
    noStroke();
    fill(255);
    translate(this.xPos,this.yPos);
    rect(0,0,width,20);
    rect(0,80,width,20);
    rect(0,160,width,20);
    rect(0,240,width,20);
    rect(0,320,width,20);
    rect(0,0,20,340);
    rect(0,width-20,20,340);
    rect();
    pop();
  }
}
