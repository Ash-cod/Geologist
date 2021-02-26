var ground;
var stone;
var hammer;
var iron;
var rubber;
var sandParticles;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	ground = new Ground(600, height, 1200, 20)

	stone = new Stone(700, 320, 100, 100);
	iron = new Iron(300, 350);
	rubber = new Rubber(900, 450, 70);
	hammer = new Hammer(10, 100);

	sand1 = new SandParticles(505, 450, 10);
	sand2 = new SandParticles(510, 450, 10);
	sand3 = new SandParticles(515, 450, 10);
	sand4 = new SandParticles(520, 450, 10);
	sand5 = new SandParticles(525, 450, 10);
	sand6 = new SandParticles(515, 445, 10);
	sand7 = new SandParticles(520, 445, 10);
	sand8 = new SandParticles(525, 445, 10);
	sand9 = new SandParticles(530, 445, 10);
	sand10 = new SandParticles(535, 445, 10);



	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("blue");
	ground.display();
	stone.display();
	iron.display();
	rubber.display();
	hammer.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	sand7.display();
	sand8.display();
	sand9.display();
	sand10.display();
	drawSprites();

}



