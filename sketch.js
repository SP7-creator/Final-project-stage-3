var edges;
var bg,bgimg;
var caveman,cavemanimg;
var title,titleimg;
var bowandarrow, bowandarrowimg;
var gold,goldimg;
var chicken,chickengimg;
var mace, maceimg;
var baGroup,chickenGroup,maceGroup,goldGroup;


function preload(){
bgimg = loadImage("Images/bg.jpg");
cavemanimg = loadAnimation("Images/caveman 1.png","Images/caveman 2.png","Images/caveman 3.png","Images/caveman 4.png","Images/caveman 5.png","Images/caveman 6.png")  
titleimg = loadImage("Images/title.png");
jump = loadImage("Images/jump.png");
bowandarrow = loadImage("Images/bowandarrow.png");
gold = loadImage("Images/gold.png");
mace = loadImage("Images/mace.png");
chicken = loadImage("Images/chicken.png");
}



function setup() {
  createCanvas(800, 600);
  edges - createEdgeSprites();
 bg = createSprite(450,250);
 bg.addImage("background",bgimg);
 bg.velocityX = -3;

 caveman = createSprite(100,500);
 caveman.addAnimation("Player",cavemanimg);
 caveman.addAnimation("jumping",jump);
 caveman.scale = 0.9;
 

 title = createSprite(130,100);
 title.addAnimation("Title",titleimg);
 title.scale = 0.7;

 baGroup = createGroup();
 chickenGroup = createGroup();
 maceGroup = createGroup();
 goldGroup = createGroup();
}

function draw() {
 background(0);
 if (bg.x < 70){
  bg.x = bg.width/2;
 }
  spawnChicken();
  spawnMace();
  spawnGold();
  spawnBowandarrow();
 
 if(keyDown("SPACE")&& caveman.y >=300){
 
 caveman.changeAnimation("jumping",jump);
 caveman.velocityY = -5;

 }
 caveman.velocityY = caveman.velocityY = 0.8;
 caveman.collide(edges);
  
 drawSprites();

  
}

function spawnChicken(){
if(frameCount%60 === 0){
var chicken = createSprite(700,500,40,40);
chicken.addImage("obstacle",chickenimg);
chicken.velocityX = -3;
chicken.lifetime = 300;
chickenGroup.add(chicken);
}
}

function spawnMace(){
  if(frameCount%60 === 0){
  var mace = createSprite(760,500,40,40);
  mace.addImage("obstacle2",maceimg);
  mace.velocityX = -3;
  mace.lifetime = 300;
  maceGroup.add(mace);
  }
  }

  function spawnGold(){
    if(frameCount%60 === 0){
    var gold = createSprite(800,500,40,40);
    gold.addImage("obstacle3",goldimg);
    gold.velocityX = -3;
    gold.lifetime = 300;
    goldGroup.add(gold);
    }
    }

    function spawnBowandarrow(){
      if(frameCount%60 === 0){
      var mace = createSprite(840,500,40,40);
      bowandarrow.addImage("obstacle4",bowandarrowimg);
      bowandarrow.velocityX = -3;
      bowandarrow.lifetime = 300;
      bowandarrowGroup.add(bowandarrow);
      }
      }

