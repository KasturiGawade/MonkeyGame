//create variable for survival time
var survivalTime = 0;

//create the different variables
var monkey,monkey_running;
var ground;
var banana,bananaImage,bananaGroup;
var obstacle,obstacleImage,obstacleGroup;

function preload(){
 //to preload all the animations
 monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",    "sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png",
 "sprite_7.png","sprite_8.png")

 //to preload all the images
 bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");
}

function setup() {
  //to create a canvas
  createCanvas(600, 400);

  //to create the monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("sprite_1.png",monkey_running);
  monkey.scale = 0.14;
  monkey.setCollider("circle");
  monkey.debug = false;
  
  //to create the ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  //to create the different groups
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
}

function draw() {
 //for the background color
 background("white");
  
  //for the survival time
  textSize(25);
  textFont("Narkisim")
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time : "+ survivalTime, 220,30)
  
  //to make the monkey jump
  if(keyDown("space") && monkey.y>200){
    monkey.velocityY = -12;
  }
  
  //to give gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //to make sure that the monkey collides on the ground
  monkey.collide(ground);
  
    //to create scrolling ground
  if (ground.x < 200){
      ground.x = ground.width/2;
    }
  
  //to create the bananas
  if(frameCount % 80 === 0){
    banana = createSprite(600,165,10,40);
    banana.y = Math.round(random(120,200));
    banana.addImage("banana.png",bananaImage);
    banana.velocityX = -5;
    banana.scale = 0.1;
    banana.liftime = 200;
    bananaGroup.add(banana);
  }
  
  //to create the obstacles
  if(frameCount % 300 === 0){
    obstacle = createSprite(600,320,10,40);
    obstacle.y = 320;
    obstacle.addImage("obstacle.png",obstacleImage);
    obstacle.velocityX = -5;
    obstacle.scale = 0.155;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
  
  drawSprites();
}