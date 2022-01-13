
var bathImg, bath;
var brushImg, brush;
var drinkImg, drink;
var eatImg, eat;
var gym11Img, gym11;
var gym1Img, gym1;
var moveImg, move;
var sleepImg, sleep;
var iss;

function preload()
{
bathImg = loadAnimation ("bath1.png","bath2.png");

brushImg = loadImage ("brush.png");

drinkImg = loadAnimation ("drink1.png","drink2.png");

eatImg = loadAnimation ("eat1.png","eat2.png");

gym11Img = loadAnimation("gym11.png","gym12.png");

gym1Img =loadAnimation("gym1.png","gym2.png");

moveImg = loadAnimation("move.png","move1.png");

sleepImg = loadImage ("sleep.png");

iss = loadImage ("iss.png");

}
function setup() {
  createCanvas(800,400);


  move = createSprite(400,300,40,20);
  move.addAnimation("move",moveImg);
  move.scale = 0.1;


}

function draw() {
  background(iss,0,0, height ,width * 2);  
  
  if(keyDown("LEFT_ARROW")) {
    bath = createSprite(200,250,20,50);
    bath.addAnimation("bath",bathImg);
    bath.scale = 0.1;
    
  }
  if(keyDown("UP_ARROW")) {
    brush = createSprite(400,250,40,20);
    brush.addImage("brush",brushImg);
    brush.scale = 0.1;
    
  }
  if(keyDown("SPACE ")) {
    drink = createSprite(600,250,40,20);
    drink.addAnimation("drink",drinkImg);
    drink.scale = 0.1;
    
  }
  if(keyDown("RIGHT_ARROW")) {
    eat = createSprite(450,130,40,20);
    eat.addAnimation("eat",eatImg);
    eat.scale = 0.1;
    
  }
  if(keyDown("DOWN_ARROW ")) {
    gym11 = createSprite(400,250,40,20);
  gym11.addAnimation("gym",gym11Img);
  gym11.scale = 0.1;

  gym1 = createSprite(400,300,40,20);
  gym1.addAnimation("gym1",gym1Img);
  gym1.scale = 0.1;
    
  }
  if(keyDown("Botón m ")) {
    sleep = createSprite(400,280,40,20);
  sleep.addImage("sleep",sleepImg);
  sleep.scale = 0.1;
    
  }



  drawSprites();
}