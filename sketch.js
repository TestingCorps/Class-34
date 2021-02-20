const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,680,1200,20)
  ball = new Ball(200,200,80,80);
  rope = new Rope(ball.body,{x:500,y:50})
  box1 = new Box(900,100,60,60);
  box2 = new Box(900,100,60,60);
  box3 = new Box(900,100,60,60);
  box4 = new Box(900,100,60,60);
  box5 = new Box(900,100,60,60);
  box6 = new Box(900,100,60,60);
  box7 = new Box(900,100,60,60);
  box8 = new Box(900,100,60,60);

  box11 = new Box(800,100,60,60);
  box21 = new Box(800,100,60,60);
  box31 = new Box(800,100,60,60);
  box41 = new Box(800,100,60,60);
  box51 = new Box(800,100,60,60);
  box61 = new Box(800,100,60,60);
  box71 = new Box(800,100,60,60);
  box81 = new Box(800,100,60,60);
  box91 = new Box(800,100,60,60);

  box12 = new Box(700,100,60,60);
  box22 = new Box(700,100,60,60);
  box32 = new Box(700,100,60,60);
  box42 = new Box(700,100,60,60);
  box52 = new Box(700,100,60,60);
  box62 = new Box(700,100,60,60);
  box72 = new Box(700,100,60,60);
  box82 = new Box(700,100,60,60);
  box92 = new Box(700,100,60,60);
  box102 = new Box(700,100,60,60);

}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();
  ball.display();
  rope.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box11.display();
  box21.display();
  box31.display();
  box41.display();
  box51.display();
  box61.display();
  box71.display();
  box81.display();
  box91.display();

  box12.display();
  box22.display();
  box32.display();
  box42.display();
  box52.display();
  box62.display();
  box72.display();
  box82.display();
  box92.display();
  box102.display();

}