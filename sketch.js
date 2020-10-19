var wall,thickness;
var bullet,speed,weight,bullet2;
function setup() {
  createCanvas(1600,400);
  
  speed=random(22,83);
  thickness=random(22,83);
 
  weight=random(30,52);
  bullet=createSprite(50,200,40,30);
  bullet2=createSprite(50,100,40,30);
  wall=createSprite(1500,200,thickness,height/1);
  wall.shapeColor="black"
  bullet.velocityX=speed;
  bullet2.velocityX=speed;
 
 
}

function draw() {
  background("blue"); 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
       bullet.velocityX=0;
       var damage= 0.5 * weight * speed * speed / (thickness * thickness * thickness);
       if(damage>10){
          wall.shapeColor=color(255,0,0);
       }
       if(damage<10){
          wall.shapeColor=color(0,255,0);
       }
  }
  
  if(wall.x-bullet2.x<(bullet2.width+wall.width)/2){
    bullet2.velocityX=0;
    var damage= 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if(damage>10){
       wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
       wall.shapeColor=color(0,255,0);
    }
}  


 
  drawSprites();
}





