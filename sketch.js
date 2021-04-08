const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box3,box4,pig2;
var ground1;
var pig1;
var log1,log2;
var box5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    var ground_options ={
        isStatic: true
    }

    
     box1 = new Box(800,100,50,50);
    box2 = new Box(600,100,50,50);
    pig1=new Pig(700,100);
    log1=new Log(700,50,250,PI/2);
    box3=new Box(800,20,50,50);
    box4= new Box(600,20,50,50);
    pig2=new Pig(700,20);
    log2=new Log(700,10,250,PI/2);
    ground1=new Ground(600,390,1200,5);
    box5=new Box(700,0,50,50)
    
}

function draw(){
    background(0);
    Engine.update(engine);
        
        box2.display();
    box1.display();
    pig1.display();
    pig2.display();
    box3.display();
    box4.display();
    ground1.display();
    log1.display();
    log2.display();
    box5.display();
}
