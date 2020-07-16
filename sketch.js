var mrect,rect;
var box1,box2;
var bin1,bin2,bin3;

function setup() {
  createCanvas(800,400);
  
  mrect = createSprite(400,350,800,20);
  mrect.shapeColor =  "grey" ;
o1 = createSprite(100,200,55,55)
o1.shapeColor = "yellow";
box1 = createSprite(600,180,200,20);
  box1.shapeColor =  "green" ;

  box2 = createSprite(600,260,170,170);
  box2.shapeColor =  "green" ;

  bin1 = createSprite(560,265,10,100);
  bin1.shapeColor =  "white" ;

  bin2 = createSprite(640,265,10,100);
  bin2.shapeColor =  "white" ;

  bin3 = createSprite(600,265,10,100);
  bin3.shapeColor =  "white" ;
}

function draw() {
  background("white"); 
o1.x = World.mouseX;
o1.y = World. mouseY;
if(istouching(o1,box1,box2)){
  o1.shapeColor = "white"
}
else{
  o1.shapeColor = "yellow" 
} 
drawSprites();
}
