
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin;

function preload() {}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground  = new Ground(width/2, 399, width, 15);
	dustbin = new Dustbin(1000, 380);
	paper = new Paper(100, 220, 20);

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(0);
   
	ground.display();
	paper.display();
	dustbin.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x : 20, y : -20});
	}
}