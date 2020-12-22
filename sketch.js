//Respected mam as per the instructions I have completed my game but I am not getting the command to restart the game means if the game state is equal to end then it is not coming back to play so what to do kindly guide//

var PLAY=1;
var END=0;
var gameState=PLAY;

var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var score=0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 600);
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);

  ground.velocityX = -4;
  ground.x = ground.width / 2;
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  
}

function draw() {
  background("white");
  stroke("red");
  textSize(20);
  fill("red");
  
      text("Score "+score,50,500);
 
  stroke("black");
  textSize(20);
  fill("black");
 
  text("Survival Time: "+survivalTime,100,50);
  
  if(gameState===PLAY){
    
     ground.velocityX = -2;
  //   console.log(ground.x);
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
    
    score = score + Math.round(getFrameRate()/60);
     survivalTime=Math.ceil(frameCount/frameRate());
    
    if (keyDown("space")) {
    monkey.velocityY = -10;
  }
    
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
    
    
  food();
  obstacles();
     
    if(obstacleGroup.isTouching(monkey)){
       gameState=END
       }
     }
else if(gameState===END){
  
  
  score=0;
  survivalTime=0;
  
  textSize(20)
  text("GAME OVER",120,180);
  text("PRESS R TO RESTART",100,250);
banana.veocityX=0;
    ground.velocityX=0;
    monkey.visible=false;
    banana.visible=false;
   obstacle.visible=false;
  obstacleGroup.setVelocityXEach(0);
  bananaGroup.setVelocityXEach(0);
  obstacleGroup.setLifetimeEach(-1);
  bananaGroup.setLifetimeEach(-1);
  
     if(keyWentDown("r")){
        gameState=PLAY;
        }

        }  


drawSprites();  
  
}
  


  

  
  
    
    


function food(){
  if(World.frameCount%90==0){
     banana=createSprite(0,200,30,30);
      banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=3;
    banana.y=Math.round(random(120,200));
   banana.lifetime=200;
bananaGroup.add(banana) ;
  
     }
}

function obstacles(){
  if(World.frameCount%300===0){
     obstacle=createSprite(600,310,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-2;
    //obstacle.depth=monkey.depth;
   // monkey.depth=monkey.depth+1;
    obstacle.lifetime=450;
    obstacleGroup.add(obstacle);
     }
}