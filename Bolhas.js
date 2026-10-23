class Bolha {
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
  exibir(){
    stroke(255);
    noFill();
    circle(this.x,this.y,this.r);
  }

  atualizar(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
  
}