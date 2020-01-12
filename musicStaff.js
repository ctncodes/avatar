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
    pop();
  }
}
