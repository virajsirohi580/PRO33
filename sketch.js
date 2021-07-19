const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowflakes = []
var maxsnowflakes = 100

function preload(){
  backgroundIMG = loadImage("snow1.jpg");
  boyIMG = loadImage("winter boy.png")
  girlIMG = loadImage("winter girl.png")
  treeImg= loadImage("tree.png")
}
function setup() {
  createCanvas(1200,600);
 engine = Engine.create();
 world = engine.world;

 
  boy = createSprite(290,390)
  boy.addImage(boyIMG)
  boy.scale= 0.5;

  girl = createSprite(1000,500);
  girl.addImage(girlIMG);
  girl.scale=0.8

  tree= createSprite(1080,300);
  tree.addImage(treeImg)
  tree.scale= 0.2
  

  if(frameCount % 150 === 0){
    for(var i=0; i<maxsnowflakes; i++){
    snowflakes.push(new snowflake(random(0,1200), random(0,1200)));
    }
  }  
  
  
}

function draw() {
  background(backgroundIMG);  
  Engine.update(engine);
  for(var i = 0; i<maxsnowflakes; i++){
    snowflakes[i].display();
    snowflakes[i].updateY()
    }
    
  drawSprites();

}