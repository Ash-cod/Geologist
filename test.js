
var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var foodsGroup, obstaclesGroup;
var score = 0;
var survivalTime = 0;
var PLAY = 1;
var END = 0;
var gameState = 1;



function preload() {


    monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("obstacle.png");

    obstaclesGroup = new Group();

}



function setup() {
    createCanvas(600, 600);

    //creating monkey
    monkey = createSprite(80, 315, 20, 20);
    monkey.addAnimation("moving", monkey_running);
    monkey.scale = 0.1;

    //creating ground
    ground = createSprite(400, 350, 1200, 10);
    ground.velocityX = -4;
    ground.x=ground.width/2;




}


function draw() {
    background(225);

    console.log(ground.x);

    if (gameState === PLAY) {
        if (ground.x < 0) {
            ground.x = ground.width / 2;
        }
        if (keyDown("space")) {
            monkey.velocityY = -12;
        }
        monkey.velocityY = monkey.velocityY + 0.8;

        monkey.collide(ground);
        spawnObstacles();


        if (obstaclesGroup.isTouching(monkey)) {
            gameState = END;
        }
    }
    if (gameState === END) {
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
    }


    //for survival time
    stroke("white");
    textSize(20);
    fill("white");
    text("Score: " + score, 500, 50);


    stroke("black");
    textSize(20);
    fill("black");
    survivalTime = Math.ceil(frameCount / frameRate())
    text("Survival Time: " + survivalTime, 100, 50);
    drawSprites();

}


function spawnObstacles() {
    if (frameCount % 60 === 0) {
        var obstacle = createSprite(600, 315, 10, 40);
        obstacle.velocityX = -6;

        obstacle.addImage(obstacleImage);

        //assign scale and lifetime to the obstacle           
        obstacle.scale = 0.2;
        obstacle.lifetime = 300;

        //add each obstacle to the group
        obstaclesGroup.add(obstacle);
    }
}






