//Create variables here
var dog,happyDog , database, foodS, foodStock;
var dogImage;
var database;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,380,20,20);
  dog.addImage(dogImage);
  dog.scale=0.1;
  database=firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  drawSprites();
  //add styles here
  fill("white");
  text("NOTE: Press UP_ARROW to feed drago milk",150,20);
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDog);
 }
}

function readStock(data){
   foodS=data.val();
}

function writeStock(){
  database.ref('/').update({
    Food:x
  })
}

