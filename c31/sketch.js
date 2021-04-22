const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var myengine,myworld;
var ground1;
var bird1
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var platform1;
var sling1,chain2;

var bgImage

var gamestate = "before"

function preload() {
    bgImage=loadImage("sprites/bg.png")
}

function setup() {
  createCanvas(1000,600);
  myengine=Engine.create();
  myworld=myengine.world;

  box1 = new box(700,550,60,60);
  box2 = new box(900,550,60,60);
  box3 = new box(700,520,60,60);
  box4 = new box(900,520,60,60);
  box5 = new box(800,490,60,60);

  pig1 = new pig(800,550,35,35);
  pig2 = new pig(800,520,35,35);

  log1 = new log(800,530,265,20,PI);
  log2 = new log(800,500,265,20,PI);
  log3 = new log(790,420,150,20,-PI/4);
  log4 = new log(820,420,125,20,PI/4)

  bird1 = new bird(191,185,60,60);

  ground1 = new ground(500,575,1000,50)

  platform1 = new ground(150,450,300,250)

  sling1 = new slingshot(bird1.body,{x:200,y:200},10,0.08,8);
  //chain2 = new rope(pig1.body,box1.body,22,0.04,2);
}

function draw() {
  background(bgImage); 
    Engine.update(myengine)

    console.log()
  //imageMode(CENTER);
  //image(bgImage,500,300,1000,600);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  bird1.display();

  ground1.display();

  platform1.display();

  sling1.display();
  //chain2.display();
}

function mouseDragged() {
  if(gamestate == "before"){
  Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})
  }
}
function mouseReleased() {
  sling1.fly()
  gamestate = "after"
}
function keyPressed() {
  if(keyCode == 82 || keyCode == 114){
    Matter.Body.setPosition(bird1.body,{x:191,y:185})
    sling1.attach(bird1.body)
    bird1.path = []
    gamestate = "before"
  }
}