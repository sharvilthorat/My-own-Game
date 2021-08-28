var bgImg,specsImg,baket,basketImage,appleImg,bananaImg,melonImg,boxImg,bottleImg;
var WetWasteGroup,DryWasteGroup;
var PLAYSTATE=0;
var GAMESTATE=PLAYSTATE;
var ENDSTATE=1;
 var score=0;



function preload(){
bgImg=loadImage("Images/Bg.jpg")
specsImg=loadImage("Images/Specs.png");
boxImg=loadImage("Images/Box.png");
bottleImg=loadImage("Images/Bottle.png");
appleImg=loadImage("Images/apple2.png");
bananaImg=loadImage("Images/banana2.png");
melonImg=loadImage("Images/melon2.png");
basketImage=loadImage("Images/trashCan.png");


}


function setup() {
  createCanvas(displayWidth,displayHeight);
  basket=createSprite(600, 530, 50, 50);
  basket.addImage(basketImage);
WetWasteGroup= new Group();
DryWasteGroup= new Group();
 
}

function draw() {
  background(bgImg);  
  if(keyDown(LEFT_ARROW)){
    basket.x=basket.x-2
  }
  if(keyDown(RIGHT_ARROW)){
    basket.x=basket.x+2
  }


  spawnDryWaste();
  spawnWetWaste();
  drawSprites();


}

function spawnDryWaste() {
  if(frameCount % 60 === 0) {
    var DryWaste = createSprite(random(0,displayWidth),165,10,40);
    //obstacle.debug = true;
    DryWaste.velocityY=2;
    
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: DryWaste.addImage(specsImg);
              break;
      case 2: DryWaste.addImage(boxImg);
              break;
      case 3:  DryWaste.addImage(bottleImg);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    DryWaste.scale = 0.5;
   DryWaste.lifetime = 300;
    //add each obstacle to the group
    DryWasteGroup.add(DryWaste);
  }
}
function spawnWetWaste() {
  if(frameCount % 60 === 0) {
    var WetWaste = createSprite(random(0,displayWidth),165,10,40);
    //obstacle.debug = true;
    WetWaste.velocityY=2;
    
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: WetWaste.addImage(appleImg);
              break;
      case 2: WetWaste.addImage(bananaImg);
              break;
      case 3: WetWaste.addImage(melonImg);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
   WetWaste.scale = 1.5;
   WetWaste.lifetime = 300;
    //add each obstacle to the group
    WetWasteGroup.add(WetWaste);
  }
}
