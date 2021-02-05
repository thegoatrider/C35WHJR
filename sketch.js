//Create variables here
var dog, happyDog, database, foodS, foodStock,dog1; 
function preload()
{
  //load images here
 dog = loadImage("dogImg.png");
 happyDog = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog1 = createSprite(250,250,10,10);
  dog1.addImage (dog);
  dog1.scale = 0.5;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);  
}


function draw() {  
background(46, 139, 87);
  
  text("NOTE: Press UP_ARROW Key to feed Drago Milk!",140,100);
  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog1.addImage(happyDog);
    dog1.scale = 0.5;
  }
  drawSprites();

  //add styles here
   textSize(15);
   fill("white");
   
}
//Function to read value from Database
function readStock(data){
  foodS = data.val();
}

//Function to write value in Database
function writeStock(x){
 if(x<=0){
   x=0;}
   else{
     x=x-1;
   
 }
  database.ref('/').update({Food:x})
}

