var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  

  MouseX.rabbit

  createApples( ) 

  createLeaves( ) 


  var rand = apple.Round(Random(1,100))
console.log(rand)


var rand = leaf.Round(Random(1,100))
console.log(rand)

if(frameCount % 80 === 0)   {

apple=createSprite(600,300,48,10)
colud.VelocityY =-4;


}
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

  drawSprites();
}