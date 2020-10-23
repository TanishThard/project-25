
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var line1,line2,line3;
var dustbinImage;

function preload()
{
	dustbinImage=loadImage("dustbin.png");

}

function setup() {
	var canvas = createCanvas(1200,350);
	
	

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	paper = new Paper(100,250,30,30);



	

	line2=createSprite(800,200,20,100);
	line2.shapeColor=color("white");

	line2=Bodies.rectangle(800,200,20,100,{isStatic:true});
	World.add(world,line2);

	line3=createSprite(1000,200,20,100);
	line3.shapeColor=color("white");
 
	line3=Bodies.rectangle(1000,200,20,100,{isStatic:true}); 
	World.add(world,line3);

	line1=createSprite(900,210,200,20);
	line1.shapeColor=color("red");
	line1.addImage(dustbinImage);
	line1.scale=0.8;
	
	line1=Bodies.rectangle(900,210,200,20,{isStatic:true});
    World.add(world,line1);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  ground.display();
  paper.display();
 

  drawSprites();
 
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45});
	}
	}
	
