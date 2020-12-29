
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

  log1=new Log(350,320,250,10);
  log2=new Log(250,120,20,100);
  log3=new Log(450,120,20,100);
  ball=new Ball(100,300,10);
  keyPressed();
  


  ground=new Ground(300,380,600,10);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  ball.display();

 
}
function keyPressed()
{
  if (keyCode===UP_ARROW)
  {
    Ball.body.applyForce(ball.body.x,ball.body.y,body.position,{x:100,y:-100})
  }
}


