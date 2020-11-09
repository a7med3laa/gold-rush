let player;
let uImg;
let tImg;
let bImg;
let gImg;
var gold;
let trains = [];
let golds = [];
var offsetX;

function preload() {
  uImg = loadImage("Boy.gif");
  tImg = loadImage("Train.png");
  gImg = loadImage("Gold.gif");
  bImg = loadImage("Background.jpg");
}


function setup() {
  createCanvas(600, 400);
  player = new Player();
  offsetX=gold=0;  
  textAlign(CENTER);
  
  
}

function draw() {
 
  


  // generate trains
  if (random(1) < 0.005) {
    trains.push(new Train());
  }

  // generate golds
  if (random(1) < 0.05) {
    golds.push(new Gold());
  }
  
  // moving background
  image(bImg, offsetX, 0, width, height);
	
  image(bImg, offsetX + width, 0, width, height);
  
  offsetX-=2;
  if(offsetX <= -width){
 	offsetX = 0;	
  }
  
  //print number of golds
  noStroke();
      fill(255);
      textSize(20);
      text("Gold : "+ gold, width/2, 30);

  //print player
  player.show();
  player.move();
  handlePlayer();
  
  
 
  //print trains
  for (let t of trains) {
   
    t.move();
    t.show();
    
    if (player.hits(t)) {
 
      //collision
        noStroke();
        fill(255);
        textSize(30);
        text("Game Over, Got you ;)", width/2,height/2);
        textSize(20);
        text("Press f5 to continue", width/2,height/2 +40);
      noLoop();
    }
  } 
  
  // print golds
  for (let g of golds) {
   
    g.move();
    g.show();
    
    if (player.hitGold(g)) {
 
      //collision
      //increase score
      gold++;
  
      
      //delete gold from screen and array
      golds.shift();
      
    }
  
  }
  
  //win
  if(gold===200){
    noStroke();
    fill(255);
    textSize(30);
    text("You Win!!", width/2,height/2);
    noLoop();
  }
}


function handlePlayer() {
  if (keyIsDown(32)|| mouseIsPressed ||keyIsDown(UP_ARROW)) {
    player.jump();
  } else if(keyIsDown(RIGHT_ARROW)){
  if (player.x < width-100){
    player.x+=10;}
  }else if(keyIsDown(LEFT_ARROW)){
  if (player.x > 0){
    player.x-=10;}}
}
