var movingrect,fixedrect;
var o1,o2;
function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(800, 400, 50, 50);
fixedrect.shapeColor = "green";
fixedrect.debug = true;
movingrect = createSprite(100, 400, 50, 50);
movingrect.shapeColor = "green";
movingrect.debug = true;

o1 = createSprite(600, 400, 50, 50);
o1.shapeColor = "green";
o1.debug = true;

o2 = createSprite(400, 400, 50, 50);
o2.shapeColor = "green";
o2.debug = true;

}

function draw() {
  background(255,255,255);  
  

  if(istouching(o2,o1)){
    o1.shapeColor = "red";
    o2.shapeColor = "red";
   
  }
  else{

    o1.shapeColor = "green";
    o2.shapeColor = "green";

  }

  drawSprites();
}

