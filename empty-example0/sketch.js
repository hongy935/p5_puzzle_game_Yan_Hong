// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

var opening;

var i=0;

function preload(){
  music=loadSound('sounds/waltz-of-flowers.wav')
  // nosepop=loadSound('sounds/pop.wav')
  // keypickup =loadSound('sounds/keypickup.wav')
  // pick=loadSound('sounds/pick.wav')
  // doorunlock = loadSound('sounds/doorlock.wav')
}


function setup() {
  createCanvas(1024,768);
  opening = loadImage("images/opening.png"); 

  toy_mouse = loadImage("images/toymouse.png")
  
  frame=loadImage("images/frame.png")

  music.setVolume(1)
  music.play()
  // keypickup.setVolume(0.5)
  // pick.setVolume(1)
  // doorunlock.setVolume(1)
  
  toymouse = createSprite(width/2,500);
  toymouse.addImage(toy_mouse);
  
 
}

function draw() {
	background(255,255,255); 
	image(opening, 0, 0, opening.width, opening.height);
  drawSprite(toymouse);
  image(frame,1888,390,frame.width,frame.height)
  camera.position.x = toymouse.position.x;

  if(toymouse.position.x>1500){
  	 i+=2;
  	 fill(0,0,0,i)
  	 rect(0,0,2048,height)
  	 if(i>255){
    	 window.location.replace("http://localhost:8000/empty-example1/");
  	 }
	}
	if(toymouse.position.x>2000){
	  toymouse.visible=false;
	}
	
}





function keyPressed(){
  
  if(keyCode == RIGHT_ARROW ){
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