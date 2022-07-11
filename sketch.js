var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = PLAY
var PLAY=1
var END=0

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost= createSprite(300,300);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.5
  climbersGroup= new Group()
  invisibleBlockGroup= new Group()


}
function spawnDoors(){
if(frameCount%100===0){
  door = createSprite(60,0)
  door.addImage("door", doorImg)
  door.velocityY= 2;
  door.x =Math.round(random(150,500));
  climber= createSprite(60,60)
  climber.addImage("climber", climberImg)
  climber.velocityY= 2;
  climber.x=door.x
  climbersGroup.add(climber)
  ghost.depth=door.depth
  ghost.depth=ghost.depth+1;
  invisibleBlock=createSprite(60,70,100,10)
  invisibleBlock.velocityY=2
  invisibleBlock.x=climber.x
  invisibleBlockGroup.add(invisibleBlock)
}

}

function draw() {
  background(200);
  if(gameState===PLAY){
  if(tower.y > 400){
      tower.y = 300
    }
  if(keyDown("space")){
    ghost.velocityY=-10
  }
  ghost.velocityY= ghost.velocityY+0.5
  if(keyDown("left_arrow")){
    ghost.x= ghost.x-8
  }
  if(keyDown("right_arrow")){
    ghost.x= ghost.x+8
  }
if(climbersGroup.isTouching(ghost)){
  ghost.velocityY=0;
}
if(climbersGroup.isTouching(ghost)){

  gameState = END;
}
    spawnDoors()
    drawSprites()
}
else{
  text("Game Over",300,300)
}
}
