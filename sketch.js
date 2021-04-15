const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function preload(){
    bg1=loadImage("images/bg2.jpg")
}

function setup(){
    canvas = createCanvas(1600,800)
    engine = Engine.create();
    world = engine.world;
    police = new PoliceSubmarine(200,750,200,200)
    ground  = new Ground(800,790,1600,10)
    target = new Target(100,750,200,200)
    
   
    

    

    
}

function draw(){
    background(bg1);
    Engine.update(engine);
    police.display()
    fill("lightblue")
    ground.display()
  target.display()
   
}
