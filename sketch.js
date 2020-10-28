var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(400, 100, 50, 80);
 movingRect = createSprite(400,800,80,30);

 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "green";

movingRect.velocityY = -5;
fixedRect.velocityY = 5;

gameObject1 = createSprite(100,400,80,50);
gameObject2 = createSprite(800,400,30,80);

gameObject1.velocityX = 5;
gameObject2.velocityX = -5;

gameObject1.shapeColor = "red";
gameObject2.shapeColor = "red";
}

function draw() {
  background(0);  

bounceOff(gameObject1, gameObject2);

  drawSprites();
}

function bounceOff (object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    
    if(object1.y - object2.y < object2.height/2 + object1.height/2 
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
   
  }
}