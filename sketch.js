const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground
var roof
var ball1
var ball2
var connection1
var connection2
var ball3
var connection3
var ball4
var connection4
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,590,800,10)
roof=new Ground(400,100,400,10)
ball1=new Ball(200,300,50)
ball2=new Ball(260,300,50)
ball3=new Ball(320,300,50)
ball4=new Ball(380,300,50)
connection1=new Connection(ball1.ball,roof.ground)
connection2=new Connection(ball2.ball,roof.ground)
connection3=new Connection(ball3.ball,roof.ground)
connection4=new Connection(ball4.ball,roof.ground)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  
ground.display()
ball1.display()
connection1.display()
ball2.display()
ball3.display()
connection3.display()
connection2.display()
connection4.display()
ball4.display()
roof.display()
  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
