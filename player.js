class Player {

  constructor() {
    this.r = 90;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 1;
  }

  hits(train) {
    let x1=this.x;
    let y1=this.y;
    let x2=train.x+ train.r*0.35;
    let y2=train.y+ train.r*0.35;
    return collideCircleCircle(x1,y1,this.r, x2,y2,train.r);
  }

  
  hitGold(gold) {
    let x1=this.x;
    let y1=this.y;
    let x2=gold.x;
    let y2=gold.y;
    return collideCircleCircle(x1,y1,this.r, x2,y2,gold.r);
  }
  
  jump() {
    if (this.y == height - this.r) {
      this.vy = -20;
    }
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r)

  }

  show() {
    image(uImg, this.x, this.y, this.r, this.r);
  }
}