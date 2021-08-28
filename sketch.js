const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

function preload() {
  base1I = loadImage("assets/base1.png")
  base2I = loadImage("assets/base2.png")
  playerI = loadImage("assets/player.png")
  bgI = loadImage("assets/sky.jpeg")
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  island1 = new Island1(width*0.2,height*0.8,289,200)
  island2 = new Island2(width*0.8,height*0.8,289,200)
  player1 = new Player1(width*0.2,0,90,200)
  player2 = new Player2(width*0.8,0,90,200)
 }

function draw() {

  background(bgI);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, height*0.1);

   //Display Playerbase and computer base 
  island1.display()
  island2.display()
  player1.display()
  player2.display()

   //display Player and computerplayer


}
