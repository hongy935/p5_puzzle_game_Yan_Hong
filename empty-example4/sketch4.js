// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

var backgroundbox4;
var clickcount=0;
var i=0;

function preload(){
  disappear=loadSound('sounds/crystal.wav')
  car=loadSound('sounds/carhorn.wav');
  van=loadSound('sounds/van.wav');
}

function setup() {
  createCanvas(1024,768);
  backgroundbox4 = loadImage("images/last_room.png"); 
  toy_mouse = loadImage("images/mouse.png");
  mouse_eye = loadImage("images/mouse_eye.png");
  mouse_key = loadImage("images/mouse_key.png");
  last_door=loadImage("images/last_door.png")
  last_door2=loadImage("images/last_door2.png")
  mouse_key2 = loadImage("images/mouse_key2.png");
  //white=loadImage("images/tint_.png");
  
  toymouse1 = createSprite(200,620);
  toymouse1.addImage(toy_mouse);
  toymouse2 = createSprite(200,645);
  toymouse2.addImage(mouse_eye);
  toymouse3 = createSprite(200,610);
  toymouse3.addImage(mouse_key);
  
  lastdoor=createSprite(520,465)
  lastdoor.addImage(last_door);  
  lastdoor2=createSprite(520,465)
  lastdoor2.addImage(last_door2);

  
  
  key2 = createSprite(515,400);
  key2.addImage(mouse_key2);
  lastdoor2.visible=false;
  
  disappear.setVolume(1)
  car.setVolume(1)
  van.setVolume(1)
  
 
}

function draw() {
	background(255,255,255); 
	image(backgroundbox4, 0, 0, backgroundbox4.width/2, backgroundbox4.height/2);
	drawSprite(lastdoor);
	drawSprite(key2);
	drawSprite(lastdoor2);
	drawSprite(toymouse3);	
	drawSprite(toymouse1);
	drawSprite(toymouse2);

  lastdoor.onMousePressed = function(){
    if(toymouse3.overlap(key2)){
      lastdoor2.visible=true;
      toymouse3.visible=false;
      clickcount++;
      // if(lastdoor2.visible==true){
      car.play();
    }
  }
	
	if(mouseIsPressed&&lastdoor2.visible==true&&clickcount>1&&camera.zoom<=1.2){
	  camera.zoom+=0.005
	  camera.position.y = lastdoor2.position.y;
	 // van.play();
	}
	
	if(camera.zoom>1){
	  i+=1;
	 fill(255,255,255,i)
	 rect(0,0,width,height)

	}
	
	
	  if(toymouse3.overlap(toymouse2))
    toymouse2.visible = true;
  else
    toymouse2.visible = false;
    
    toymouse3.onMousePressed=function(){
      if(toymouse2.visible==true){
        disappear.play();
      }
    }

}

function keyPressed(){
  toymouse1.friction = 0.9;
  toymouse2.friction = 0.9;
  toymouse3.friction = 0.9;
  if(keyCode == RIGHT_ARROW && toymouse2.visible==true){
    toymouse1.mirrorX(1);
    toymouse1.velocity.x=5;
    
    toymouse2.mirrorX(1);
    toymouse2.velocity.x=5;
    
    if(toymouse3.overlap(toymouse2)){
    toymouse3.mirrorX(1);
    toymouse3.velocity.x=5;}
    
  }
  else if(keyCode == LEFT_ARROW && toymouse2.visible==true){
    toymouse1.mirrorX(-1);
    toymouse1.velocity.x=-5;
    
    toymouse2.velocity.x=-5;
    toymouse2.mirrorX(-1);
    
    if(toymouse3.overlap(toymouse2)){
    toymouse3.velocity.x=-5;
    toymouse3.mirrorX(-1);}
    
  }
  
  return false;
  
}

function mouseDragged (){
  if(mouseX-toymouse3.position.x<88 &&toymouse3.position.x-mouseX<88 && 
  mouseY-toymouse3.position.y<88 &&toymouse3.position.y-mouseY<88){
    toymouse3.position.x = mouseX;
    toymouse3.position.y = mouseY;
  }if(toymouse3.overlap(key2)){
    toymouse3.position.x=515;
    toymouse3.position.y=400;
    
  }
}

