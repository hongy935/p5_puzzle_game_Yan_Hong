// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

var backgroundbox3;
var GRAVITY = 4;
var newSprite;
var x1;
var y1;
var clickcount = 0;
var i=0;

function preload(){
  soundFormats('mp3');
  catscream = loadSound('sounds/Cat_Scream.mp3')
  catmeow = loadSound('sounds/Cat_Meow_2.mp3')
  appear = loadSound('sounds/Appear.mp3')
  waterdrop = loadSound('sounds/Water_Drop.mp3')
}


function setup() {
  createCanvas(1024,768);
  backgroundbox3 = loadImage("images/cat_room.png"); 
  stair = loadImage("images/stair.png");
  door = loadImage("images/door.png");
  toy_mouse = loadImage("images/toymouse.png");
  doorframe = loadImage("images/doorframe.png");
  eye = loadImage("images/eye1.png");
  teardrop = loadImage("images/tear.png");
  catbody = loadImage("images/cat.png")
  cateye = loadImage("images/cat_eye.png");
  cattail = loadImage("images/cat_tail.png");
  catwhite = loadImage("images/cat_white.png");
  catmouth = loadImage("images/cat_mouth.png");
  catback = loadImage("images/cat_back.png");
  catbacktail = loadImage("images/cat_backtail.png");
  hole_ = loadImage("images/hole copy.png")
  //holeframe = loadImage("images/holeframe.png")
  catscream.setVolume(0.4)
  catmeow.setVolume(0.5)
  appear.setVolume(0.2)
  waterdrop.setVolume(0.5)
  flower = loadAnimation("images/flower1.png","images/flower4.png")
  flower.playing = false;

  
  eyeL = createSprite(330,230)
  eyeL.addImage(eye);
  
  eyeR = createSprite(680,230)
  eyeR.addImage(eye);
  
  eyeL.addAnimation("blink", "images/eye1.png", "images/eye7.png")
  eyeR.addAnimation("blink", "images/eye1.png", "images/eye7.png")
  
  butterfly = createSprite(330,500)
  var myAnimation = butterfly.addAnimation("flying","images/butterfly1.png","images/butterfly6.png")
  
  cat_white = createSprite(560,500);
  cat_white.addImage(catwhite)
  
  cat_tail = createSprite(560,500)
  cat_tail.addImage(cattail)
  
  cat_eye = createSprite(x1,y1)
  cat_eye.addImage(cateye)

  cat_body = createSprite(560,500)
  cat_body.addImage(catbody)
  
  cat_mouth = createSprite(560,500)
  cat_mouth.addImage(catmouth)

  cat_back = createSprite(560,470)
  cat_back.addImage(catback)

  cat_backtail = createSprite(560,470)
  cat_backtail.addImage(catbacktail)
  
  hole=createSprite(80,600);
  hole.addImage(hole_)
  
  toymouse = createSprite(150,640);
  toymouse.addImage(toy_mouse); 
  toymouse.visible=false;
}

function draw() {
	background(255,255,255); 
	image(backgroundbox3, 0, 0, backgroundbox3.width/2, backgroundbox3.height/2);
	image(stair,630, 320, stair.width/2, stair.height/2)
	image(door, 890,175,door.width,door.height)


	drawSprite(eyeL)
	drawSprite(eyeR)
	drawSprite(cat_white)
  var x1 = map(mouseX, 0, width, 555, 585)
  var y1 = map(mouseY, 0, height, 470, 530)

	drawSprite(cat_tail);
// 	cat_tail.visible=true;
	drawSprite(cat_white);
// 	cat_white.visible=true;
	drawSprite(cat_eye);
// 	cat_eye.visible=true;
	drawSprite(cat_body);
// 	cat_body.visible=true;
  drawSprite(cat_mouth);


	
	animation(flower, 330, 580);
	
	drawSprite(butterfly)
	//animation(butterfly, 330, 500);
	butterfly.visible = false;
	
    if(toymouse.position.x>500 && cat_body.visible==true){
      cat_mouth.visible=true;
      cat_tail.rotation=90;
      cat_tail.position.x=660;
      cat_tail.position.y=600;
      cat_eye.position.x = 570;
      cat_eye.position.y = 510;
    }else
  {cat_mouth.visible=false;
  cat_tail.rotation=0;
  cat_tail.position.x=560;
  cat_tail.position.y=500;
  cat_eye.position.x = x1;
  cat_eye.position.y = y1;
  }

	drawSprite(cat_back);
	cat_back.visible=false;
	drawSprite(cat_backtail);
	cat_backtail.visible=false;
	
	drawSprite(hole);	
	drawSprite(toymouse);	


	drawSprites()

  image(doorframe,960,150,doorframe.width,doorframe.height);


  hole.onMouseReleased = function(){
    toymouse.visible=true;
  }
  
  // if(toymouse.position.y<=550 && toymouse.visible==true){
  //   toymouse.velocity.y+=8
  // }else if(toymouse.position.y>=640)
  // {
  // toymouse.velocity.y= 0
  // }
  
  //   if(toymouse.position.y<=550){
  //   toymouse.velocity.y+= 2
  // }else if(toymouse.position.y>=640)
  // {toymouse.velocity.y= 0}
  
	
	eyeL.onMousePressed = function() {
	 this.changeAnimation("blink");
	 this.animation.goToFrame(this.animation.getLastFrame());
	 waterdrop.play();
	 if(clickcount==12){
    appear.play();
  }
	}
	
  eyeL.onMouseReleased = function() {

  this.changeAnimation("blink");
  this.animation.goToFrame(0);
      clickcount +=1;
      print(clickcount)
      if(clickcount == 3)
      flower.goToFrame(1)
      if(clickcount == 6)
      flower.goToFrame(2)
      if(clickcount == 9)
      flower.goToFrame(3)

  }
  
	eyeR.onMousePressed = function() {
	  this.changeAnimation("blink");
	 this.animation.goToFrame(this.animation.getLastFrame());

	}
	
  eyeR.onMouseReleased = function() {
  this.changeAnimation("blink");
  this.animation.goToFrame(0);
  // toymouse.visible=true;

  }
  
  if(clickcount > 12){
  butterfly.visible = true;}
  // butterfly.velocity.x=0;
  // butterfly.velocity.y=0;
  
  if(clickcount > 15){
  if(mouseX < butterfly.position.x - 50) {
    butterfly.changeAnimation("flying");
    butterfly.mirrorX(1);
    butterfly.velocity.x = - 2;
  }
    if(mouseX > butterfly.position.x + 50) {
    butterfly.changeAnimation("flying");
    butterfly.mirrorX(-1);
    butterfly.velocity.x = 2;
  }
  if(mouseY < butterfly.position.y - 40) {
    butterfly.changeAnimation("flying");
    butterfly.velocity.y = - 2;
  }
    if(mouseY > butterfly.position.y + 40) {
    butterfly.changeAnimation("flying");
    butterfly.velocity.y = 2;
  }
  // else{
  //   butterfly.velocity.x=0;
  //   butterfly.velocity.y=0;
  // }
 
  cat_tail.visible=false;
	cat_white.visible=false;
	cat_eye.visible=false;
	cat_body.visible=false;
	cat_mouth.visible=false;
	
	cat_back.visible=true;
	cat_backtail.visible=true;
  
  if(butterfly.position.x<500){
    cat_back.mirrorX(-1);
    cat_backtail.mirrorX(-1);
  }
    else{
    cat_back.mirrorX(1);
    cat_backtail.mirrorX(1);
  }
  
  
  }
  	//image(holeframe,18,477,holeframe.width/2,holeframe.height/2)
  	if(toymouse.position.y<250){
 i+=2;
fill(0,0,0,i)
rect(0,0,width,height)
  	  if(i>255){
window.location.replace("http://localhost:8000/empty-example4/");}

  	}

 }
 
function mouseClicked(){
  if(cat_mouth.visible==true){
  catscream.play();
  }
  if(clickcount>15){
  catmeow.play();
  }
  // if(clickcount==12){
  //   appear.play();
  // }
  // if(clickcount>0 && clickcount<=15){
  //   waterdrop.play();
  // }
  
}

function mouseReleased(){

  if(mouseX>230 && mouseX<410 && mouseY>185 && mouseY<275)
   var newSprite= createSprite(330,250);
   newSprite.addImage(teardrop);
    drawSprite(newSprite)
    newSprite.velocity.y = 2;
    newSprite.velocity.y += GRAVITY;
    
    if(newSprite.position.y > 600){
    print("remove")
      newSprite.visible = false;}
 
}



function keyPressed(){
  toymouse.friction = 0.9;
  if(keyCode == RIGHT_ARROW &&  cat_mouth.visible==false && toymouse.position.x<=600 ){
    toymouse.mirrorX(1);
    toymouse.rotation=0;
    toymouse.velocity.x=5;
  }
  else if(keyCode == RIGHT_ARROW && toymouse.position.x>600){
    toymouse.mirrorX(1);
    toymouse.rotation=-45;
    toymouse.velocity.x=5;
    toymouse.velocity.y=-5.7;
  }
if(keyCode == LEFT_ARROW && toymouse.position.x<=600){
    toymouse.mirrorX(-1);
    toymouse.rotation=0;
    toymouse.velocity.x=-5;
  }
  else if(keyCode == LEFT_ARROW &&toymouse.position.x>600){
    toymouse.mirrorX(-1);
    toymouse.rotation=45;
    toymouse.velocity.x=-5;
    toymouse.velocity.y=5.7;
  }
  
  return false;
  
}

