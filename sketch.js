var wall;
var bullet;
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(20,150,20,20);
  wall = createSprite(580, 150, 25, 100);
  bullet.shapeColor = "white";
  speed = random(55,90);
  weight = random(4400,1500);
}

function draw() {
  background("black");
  bullet.velocityX = speed;

  collide();
  drawSprites();
}

function collide(){
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX = 0;

    var deformation = 0.5*weight*speed*speed/22500;

    if(deformation>180){
      bullet.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      bullet.shapeColor = color(0,250,0);
    }
  }
}