class Gold{

  constructor(){
    
    this.r=40;
    this.x=width;
    this.y=height - this.r;
    
  }
  
  removeGold(){
    this.remove();
  }
  
  move(){
    
    this.x-=10;
  }
  
  show(){
   
    image(gImg, this.x, this.y, this.r, this.r);
    
  }
  
}