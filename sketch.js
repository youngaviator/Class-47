const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/sky.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    



    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body,{x:120, y: 250});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);


    bird.display();
    slingshot.display();    
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
function mouseDragged(){
    if(gameState != "launched")
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY})
}
function keyPressed(){
    if(keyCode === 32){
        bird.trajectry=[]
        Matter.Body.setPosition(bird.body, {x:120 , y:250})
        slingshot.attach(bird.body);
       
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Dubai");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "sprites/sky.png";
    }
    else{
        bg = "sprites/NIGHT.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}