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
    // rect(0,0,60,50);
    // rect(131.25,37.5,60,50);
    // rect(52.5,-75,108.75,50);
    // rect(52.5,-75,15,112.5);
    // rect(146.25,-75,15,112.5);
    pop();
  }
}
