const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    block1 = new Block(100,300,50,50);
    block2 = new Block(100,100,50,100);
    block3 = new Block(300,300,50,50);
    block4 = new Block(300,100,50,100);
    block5 = new Block(200,0,200,100);
    block6 = new Block(120,-100,50,50)
    block7 = new Block(280,-100,50,50);
    block8 = new Block(200,-200,200,25);
    
    ground = new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    ground.display();
}