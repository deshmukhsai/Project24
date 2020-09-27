
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 760);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(400,750,800,20);
	
	box1 =new Box(400,700,200,20);
	box2 = new Box(width/2 - 100,height-80,20,100);
	box3 = new Box(width/2 + 100,height-80,20,100);
	box1.Color=red;
	paper=new Paper(100,400,20,20);
	paper.Color=white;
	Engine.run(engine);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  keyPressed();
  
  drawSprites();
 
}
function keyPressed(){

if(keyCode===UP_ARROW){

Matter.Body.applyforce(paperObject.body,paperObject.body.position,{x:85,y:-85});

}

}


