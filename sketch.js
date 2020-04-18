var rectangle1 , rectangle2 
var ob1 , ob2 , ob3

function setup() {
  createCanvas(800,400);
  rectangle1 = createSprite(700, 200, 50, 100);
  rectangle2 = createSprite(700,200,50,100);
  ob1 = createSprite (600,200,50,100);
  ob2 = createSprite (500,200,50,100)
  ob3 = createSprite (400,200,50,100)
  rectangle1.shapeColor = "yellow";
  rectangle2.shapeColor = "yellow";
  ob1.shapeColor = "yellow"
  ob2.shapeColor = "yellow"
  ob3.shapeColor = "yellow"
}

function draw() {
  background(0,0,0);  
  drawSprites();
  rectangle1.x = World.mouseX
  rectangle1.y =  World.mouseY

if (isTouching(rectangle1 , ob3)){
  ob3.shapeColor = "blue";
}
else {
  ob3.shapeColor = "yellow";
}

}

function isTouching(object1 , object2){
  if (object1.x - object2.x < object2.width / 2 + object1.width / 2 && object2.x - object1.x < object2.width / 2 + object1.width / 2 && object1.y - object2.y < object2.height / 2 + object1.height / 2 && object2.y - object1.y < object2.height / 2 + object1.height / 2){
    return true 
  }
  else {
    return false 
  }
}
