
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rect1 = new Dustbin (1200,640,200,100)
	rect2 = new Dustbin (1100,605,100,100)
	rect3 = new Dustbin (1300,605,100,100)

	


	ground = new Ground(width/2,650,width,10)

	paper = new Paper(400,320,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 
  rect1.display();
  rect2.display();
  rect3.display();

  ground.display();

  paper.display();

  

}

function keyPressed () {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:120,y:-120});
	}
}



