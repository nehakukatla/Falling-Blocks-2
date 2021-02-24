const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rand, ground, platform, plank;
var blush, green, pink, purple, red;

function preload() {
    console.log("executing preload");
    blush = loadImage("plankImages/blush.png");
    green = loadImage("plankImages/green.png");
    pink = loadImage("plankImages/pink.png");
    purple = loadImage("plankImages/purple.jpg");
    red = loadImage("plankImages/red.png");
}

function setup() {
    console.log("executing setup");
    var canvas = createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(300, height, 600, 50);
    platform = new Platform(300, 560);

    //creating random x positioned planks falling from sky
    rand = Math.round(random(1, 5));
    if (frameCount % 10 === 0) {
        plank = Bodies.rectangle(random(75, 525), 100, 150, 70);
        World.add(world, plank);
        plank.velocityY = 5;
        switch (rand) {
            case 1: plank.addImage(blush);
                break;
            case 2: plank.addImage(green);
                break;
            case 3: plank.addImage(pink);
                break;
            case 4: plank.addImage(purple);
                break;
            case 5: plank.addImage(red);
                break;
            default: break;
        }

    }
}

function draw() {
    console.log("executing draw");
    background(175, 238, 238);
    Engine.update(engine);
    ground.display();
    platform.display();

    rect(plank.position.x, plank.position.y, 150, 70);

}


