var movingrect,fixedrect,game1,game2
function setup() {
  createCanvas(800,400);
 movingrect=createSprite(600,400,80,30);
 fixedrect=createSprite(400,400,50,50);
 game1=createSprite(200,200,50,50);
 game2=createSprite(300,300,30,30);
}

function draw() {
  background(0);
  movingrect.x=mouseX
  movingrect.y=mouseY
if(Istouching(movingrect,game1)){
  movingrect.shapeColor="red";
   game1.shapeColor="red";
}
else{
  movingrect.shapeColor="green";
  game1.shapeColor="green";
}

  

  drawSprites();
}
function Istouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object1.height/2+object2.height/2){
     return true ;
    }
    else{
     return false ;
    }  
} 