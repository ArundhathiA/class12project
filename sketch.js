var garden,rabbit;
var gardenImg,rabbitImg;
var apple1,leaf1;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple1=loadImage("apple.png")
  leaf1=loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;

  var x=Math.round(random(1,2));
  if(frameCount%80==0){
  if(x==1){
    createApples()
  }
   else{
     createleaves();   }}
  drawSprites();

  
  }

function createApples(){
  var apple=createSprite(random(50,350),0,10,10);
  apple.addImage(apple1);
  apple.velocityY=3;
  apple.scale=0.04;
  apple.lifetime=150;
}
function createleaves(){
  var leaves=createSprite(random(50,350),0,10,10);
  leaves.addImage(leaf1);
  leaves.scale=0.04;
  leaves.velocityY=3;
  leaves.lifetime=150;
}