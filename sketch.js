const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, devil1,devil2,devil3;
var backgroundImage,platform;
var me, slingshot;

var gameState = "onSling";

var score = 0;

function preload() {
    backgroundImage = loadImage("sprites/bg2.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    devil1 = new Devil(810, 360);
    log1 = new Log(810,300,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    devil2 = new Devil(810, 275);

    devil3 = new Devil(810, 130);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(920,120,70,70);

    box6 = new Box(700,120,70,70);
    log4 = new Log(810,130,300, PI/2);

    log5 = new Log(810,100,300, PI/2);

    me = new Me(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(me.body,{x:200, y:50});
}

function draw(){
    background(backgroundImage);
    fill(255);
    textSize(35);
    text("Score: " + score,width - 300,50);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    devil1.display();
    devil1.score();
    log1.display();

    box3.display();
    box4.display();
    devil2.display();
    devil2.score();
    log3.display();

    box5.display();

    devil3.display();
    devil3.score();

    box6.display();
    log4.display();
    log5.display();

    me.display();
    platform.display();
    //log6.display();
    slingshot.display();

    fill("white");
    textSize(17);
    text(mouseX + ',' + mouseY, 8, 22);
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && gameState === "launched"){
       slingshot.attach(me.body);

       gameState = "onSling";
    }
}

function mouseDragged(){
    if (gameState === "onSling"){
        Matter.Body.setPosition(me.body, {x: mouseX , y: mouseY});
    }
}