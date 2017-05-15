// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

var backgroundbox;
var jokerface;
var jokernose;
var jokerhat;
var jokereye;
var jokereye2;
var jokermouth;
var hatup = -5;
var GRAVITY = .3;
var jokerkey;
var toymouse;
var i=0;



function preload(){
  nosepop=loadSound('sounds/pop.wav')
  keypickup =loadSound('sounds/keypickup.wav')
  pick=loadSound('sounds/pick.wav')
  doorunlock = loadSound('sounds/doorlock.wav')
}

function setup() {
  createCanvas(1024,768);
  backgroundbox = loadImage("images/joker_room.png"); 
  jokerface = loadImage("images/joker_face.png");
  jokernose = loadImage("images/joker_nose.png");
  jokerhat = loadImage("images/joker_hat.png");
  jokereye = loadImage("images/joker_eye.png");
  jokereye2 = loadImage("images/joker_eye2.png");
  jokermouth = loadImage("images/joker_mouth.png");
  jokerkey = loadImage("images/joker_key.png");
  toy_mouse = loadImage("images/toymouse.png")
  closedoor = loadImage("images/closedoor.png")
  opendoor = loadImage("images/opendoor.png")
  doorframe=loadImage("images/doorframe.png")
  
  nosepop.setVolume(1)
  keypickup.setVolume(0.5)
  pick.setVolume(1)
  doorunlock.setVolume(1)

  face = createSprite(520, 420);
  face.addImage(jokerface);
  yellowkey = createSprite(500, 300);
  yellowkey.addImage(jokerkey);
  hat = createSprite(660, 350);
  hat.addImage(jokerhat);
  nose = createSprite(510,420)
  nose.addImage(jokernose);
  nose.mouseActive = true;
  
  close_door = createSprite(940,536)
  close_door.addImage(closedoor);
  
  open_door = createSprite(866,536)
  open_door.addImage(opendoor);
  open_door.visible=false;
  
  
  eye = createSprite(700,180)
  eye.addImage(jokereye);


  eye.onMousePressed = function() {
    eye.scale = 1.2
    pick.play()
  }
  eye.onMouseReleased = function(){
    eye.scale = 1
  }
  
  eye2 = createSprite(350,200)
  eye2.addImage(jokereye2);

  eye2.onMousePressed = function() {
    eye2.scale = 1.2
    pick.play()
  }
  eye2.onMouseReleased = function(){
    eye2.scale = 1
  }

  mouth = createSprite(220,190)
  mouth.addImage(jokermouth);


  mouth.onMousePressed = function() {
    if(mouth.overlap(face)){
    mouth.rotation =-110}
    pick.play()
  }
  mouth.onMouseReleased = function(){
    if(mouth.position.x>400 && mouth.position.x<600 && mouth.position.y>420 && mouth.position.y<520){
      mouth.rotation = -110;
    }else
    mouth.rotation =0
  }
  
  toymouse = createSprite(200,620);
  toymouse.addImage(toy_mouse);
  
 
  }


function draw() {
	background(255,255,255); 
	image(backgroundbox, 0, 0, backgroundbox.width/2, backgroundbox.height/2);
	//image(jokerface, 220, 250, jokerface.width/2, jokerface.height/2);

  drawSprite(face); 
  drawSprite(close_door);  
  drawSprite(yellowkey);
  drawSprite(hat);
  drawSprite(nose);
  drawSprite(eye);
  drawSprite(eye2);
  drawSprite(mouth);
  drawSprite(open_door);
  drawSprite(toymouse);

	image(doorframe, 963,378,doorframe.width, doorframe.height)

 nose.onMousePressed=function(){
  nosepop.play(); 
 }
 
   if(nose.mouseIsPressed && hat.position.y>320 && hat.position.y<=350) {
     hat.velocity.y = hatup;
     nose.scale = 1.05
   }
   else if(hat.position.y<340){
     hat.velocity.y += GRAVITY;
   }
   else{
   hat.velocity.y = 0;
     nose.scale = 1;
   }
   
   yellowkey.onMousePressed=function(){
     if(hat.rotation == 60 ){
     keypickup.play();}
   }  
    close_door.onMousePressed=function(){
        if(close_door.position.x-yellowkey.position.x<80 && yellowkey.position.y>400){
      open_door.visible=true;
      doorunlock.play();
    }
  
    }
    
   	if(toymouse.position.x>900){
	  i+=2;
	 fill(0,0,0,i)
	 rect(0,0,width,height)
	 if(i>255){
  window.location.replace("http://localhost:8000/empty-example2/");}


	}

   
   }

  function mouseDragged(){
    if(mouseX-eye.position.x < 30 && eye.position.x-mouseX<30 && mouseY-eye.position.y <30 && eye.position.y -mouseY <30 
    ){
    eye.position.x = mouseX;
    eye.position.y = mouseY;}
    
    if(mouseX-eye2.position.x < 30 && eye2.position.x-mouseX<30 && mouseY-eye2.position.y <30 && eye2.position.y -mouseY <30
   ){
    eye2.position.x = mouseX;
    eye2.position.y = mouseY;}
    
    if(mouseX-mouth.position.x < 40 && mouth.position.x-mouseX<40 && mouseY-mouth.position.y <40 && mouth.position.y -mouseY <40
    && eye.position.y >350 && eye2.position.y >350 && eye.position.y<420 && eye2.position.y<420 
    && eye.position.x <600 && eye2.position.x <600 && eye.position.x>400 && eye2.position.x>400 
    ){
    mouth.position.x = mouseX;
    mouth.position.y = mouseY;
      // mouth.collide(eye);
      // mouth.collide(eye2);
    }
    
    if(hat.rotation == 60 && mouseX-yellowkey.position.x <60 && yellowkey.position.x-mouseX<60
    &&mouseY-yellowkey.position.y<30 && yellowkey.position.y-mouseY<30){
      yellowkey.position.x=mouseX;
      yellowkey.position.y=mouseY;
    }
    
    // if(close_door.position.x-yellowkey.position.x<80 && yellowkey.position.y>400){
    //   open_door.visible=true;
    // }
    
  }
  
  function mousePressed(){
    if(mouth.position.x>400 && mouth.position.x<600 && mouth.position.y>420 && mouth.position.y<520 ){
    hat.rotation = 60;
   }  
  }
  
function keyPressed(){
  toymouse.friction = 0.9;
  if(keyCode == RIGHT_ARROW && toymouse.position.x<860){
    toymouse.mirrorX(1);
    toymouse.velocity.x=5;
  }else if(toymouse.position.x>=860 && open_door.visible==true && keyCode == RIGHT_ARROW){
    toymouse.mirrorX(1);
    toymouse.velocity.x=5;
  }
  else if(keyCode == LEFT_ARROW){
    toymouse.mirrorX(-1);
    toymouse.velocity.x=-5
    
  }
  else{
    toymouse.velocity.x=0
  }
  return false;
}