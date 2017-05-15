// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

var backgroundbox2;
var music_recorder1;
var recorder1;
var music_recorder2;
var recorder2;
var hole;
var thekey;
var note1;
var note2;
var note3;
var note4;
var note5;
var note6;
var clickcount=0;
var toymouse;
var cover1;
var countB=0;
var i=0;

function preload(){
  
  noteDo = loadSound('sounds/do.wav')
  noteFa = loadSound('sounds/fa.wav')
  noteLa = loadSound('sounds/la.wav')
  noteMi = loadSound('sounds/mi.wav')
  noteRe = loadSound('sounds/re.wav')
  noteSol = loadSound('sounds/sol.wav')
  magic = loadSound('sounds/magic.mp3')
  
}
  
function setup() {
  createCanvas(1024,768);
  backgroundbox2 = loadImage("images/music_room.png"); 
  music_hole = loadImage("images/hole.png");
  hole = createSprite(250,63);
  hole.addImage(music_hole);
  music_hole2=loadImage("images/hole2.png")
  hole2 = createSprite(490,660);
  hole2.addImage(music_hole2);
  holeframe=loadImage("images/holeframe.png")
  holeframe2=loadImage("images/holeframe2.png")
  hole_frame2=createSprite(493,690)
  hole_frame2.addImage(holeframe2)
  closehole=loadImage("images/closehole.png")
  music_recorder1 = loadImage("images/recorder1.png");
  recorder1 = createSprite(590, 480);
  recorder1.addImage(music_recorder1);
  music_recorder2 = loadImage("images/recorder2.png");
  recorder2 = createSprite(580, 480);
  recorder2.addImage(music_recorder2);
  toy_mouse = loadImage("images/toymouse.png")
  akey = loadImage("images/thekey.png");
  
  noteDo.setVolume(1)
  noteFa.setVolume(1)
  noteLa.setVolume(1)
  noteMi.setVolume(1)
  noteRe.setVolume(1)
  noteSol.setVolume(1)
  magic.setVolume(0.5)
  
  note_1 = loadImage("images/note1.png")
  note_2 = loadImage("images/note2.png")
  note_3 = loadImage("images/note3.png")
  note_4 = loadImage("images/note4.png")
  note_5 = loadImage("images/note5.png")
  note_6 = loadImage("images/note6.png")
  
  toymouse = createSprite(240,63);
  toymouse.addImage(toy_mouse);
  
  close_hole = createSprite(440,63);
  close_hole.addImage(closehole);
  
  keynote1 = createSprite(350,160)
  keynote1.addImage(note_1)
  keynote2 = createSprite(250,160)
  keynote2.addImage(note_2)
  keynote3 = createSprite(450,160)
  keynote3.addImage(note_3)
  keynote4 = createSprite(650,160)
  keynote4.addImage(note_4)
  keynote5 = createSprite(550,160)
  keynote5.addImage(note_5)
  keynote6 = createSprite(750,160)
  keynote6.addImage(note_6)

  cover_1 = loadImage("images/cover1.png")
  cover_2 = loadImage("images/cover2.png")
  cover_3 = loadImage("images/cover3.png")
  cover_4 = loadImage("images/cover4.png")
  cover_5 = loadImage("images/cover5.png")
  cover_6 = loadImage("images/cover6.png")
  
  cover1 = createSprite(350,160)
  cover1.addImage(cover_1)
  cover2 = createSprite(250,160)
  cover2.addImage(cover_2)
  cover3 = createSprite(450,160)
  cover3.addImage(cover_3)
  cover4 = createSprite(650,160)
  cover4.addImage(cover_4)
  cover5 = createSprite(550,160)
  cover5.addImage(cover_5)
  cover6 = createSprite(750,160)
  cover6.addImage(cover_6)
  
  cover1.visible = false;
  cover2.visible = false;
  cover3.visible = false;
  cover4.visible = false;
  cover5.visible = false;
  cover6.visible = false;
 
}

function draw() {
	background(255,255,255); 
	image(backgroundbox2, 0, 0, backgroundbox2.width/2, backgroundbox2.height/2);
	
	drawSprite(keynote1)
	drawSprite(keynote2)
	drawSprite(keynote3)
	drawSprite(keynote4)
	drawSprite(keynote5)
	drawSprite(keynote6)
	
	
	
	drawSprite(hole);
	drawSprite(hole2);
	drawSprite(recorder2);
	drawSprite(close_hole)
	

	 if(clickcount<6){
	   recorder1.onMouseClicked = function() {

      print(clickcount);
	     
	   }
	   
recorder1.onMousePressed = function(){
  if(clickcount==0){
    noteDo.play();}
  if(clickcount==1){
    noteFa.play();}
  if(clickcount==2){
    noteLa.play();}
  if(clickcount==3){
    noteMi.play();}
  if(clickcount==4){
    noteSol.play();}
  if(clickcount==5){
    noteRe.play();}
}

recorder1.onMouseReleased = function (){
	        
  clickcount+=1;
  
      if (clickcount == 1){
      note1 = createSprite(recorder1.position.x-100, random(recorder1.position.y-130,recorder1.position.y-30));
      note1.addImage(note_1);
      drawSprite(note1);
      note1.velocity.x = random(-5,-2);
      note1.velocity.y = random(-5,3)
      }
      // if(clickcount == 6){
      //   note1.remove();
      // }
      // note1.onMousePressed = function() {
      //   this.velovity.x = 0;
      //   this.velocity.y += 0.5;
      // }
     
      
      if (clickcount == 2){    
      note2 = createSprite(recorder1.position.x-100, random(recorder1.position.y-130,recorder1.position.y-30));
      note2.addImage(note_2);
      drawSprite(note2);
      note2.velocity.x = random(-5,-2);
      note2.velocity.y = random(-5,3);}
      
      if (clickcount == 3){    
      note3 = createSprite(recorder1.position.x-100, random(recorder1.position.y-130,recorder1.position.y-30));
      note3.addImage(note_3);
      drawSprite(note3);
      note3.velocity.x = random(-5,-2);
      note3.velocity.y = random(-5,3);}
  
      if (clickcount == 4){    
      note4 = createSprite(recorder1.position.x-100, random(recorder1.position.y-130,recorder1.position.y-30));
      note4.addImage(note_4);
      drawSprite(note4);
      note4.velocity.x = random(-5,-2);
      note4.velocity.y = random(-5,3);}
      
      if (clickcount == 5){    
      note5 = createSprite(recorder1.position.x-100, random(recorder1.position.y-130,recorder1.position.y-30));
      note5.addImage(note_5);
      drawSprite(note5);
      note5.velocity.x = random(-5,-2);
      note5.velocity.y = random(-5,3);}
      
      if (clickcount == 6){    
      note6 = createSprite(recorder1.position.x-100, random(recorder1.position.y-130,recorder1.position.y-30));
      note6.addImage(note_6);
      drawSprite(note6);
      note6.velocity.x = random(-5,-2);
      note6.velocity.y = random(-5,3);}
      
  print(clickcount);
  
     // note1.debug = mouseIsPressed;
          
  

}

}else{
  clickcount=0
}

 	drawSprites();
		drawSprite(recorder1);
		  drawSprite(toymouse);
		  image(holeframe, 150,13,holeframe.width/2,holeframe.height/2)
		  drawSprite(hole_frame2)
		  hole_frame2.visible=false;
		  
      if(toymouse.position.y<620){
        toymouse.velocity.y+=0.5;
      }else if(toymouse.position.y>=620){
        toymouse.velocity.y=0
      }
      toymouse.collide(recorder1)
      
     if(toymouse.position.y>630){
	  i+=2;
	 fill(0,0,0,i)
	 rect(0,0,width,height)
       if(i>255){
window.location.replace("http://localhost:8000/empty-example3/");}

     }
      
      	if(close_hole.position.x>240 && toymouse.position.y>=600){
      	  close_hole.velocity.x=-4
      	}else if(close_hole.position.x<=240){
      	  close_hole.velocity.x=0
      	}
      	
      	if(countB==6&&recorder1.position.x<740){
      	  recorder1.velocity.x=2;
      	  recorder2.velocity.x=2
      	}else if(recorder1.position.x>=740){
      	  recorder1.velocity.x=0;
      	  recorder2.velocity.x=0
      	}
      	if(toymouse.position.x>=485){
      	  hole_frame2.visible = true;
      	  toymouse.velocity.x=0;
      	  toymouse.velocity.y += 4;
      	}

keynote1.onMousePressed = function(){
  if(countB==0 || cover6.visible === true){
      noteDo.play();}
      if(countB==5){
  magic.play();
}
}

keynote1.onMouseReleased = function() {
if(countB==0 || cover6.visible === true){
 cover1.visible = true;
 countB++;
 print(countB); 
}else{
cover2.visible = false;
cover3.visible = false;
cover4.visible = false;
cover5.visible = false;
countB=0}
 }
 
keynote2.onMousePressed = function() {
if(countB==0 || cover1.visible === true){
  noteFa.play();}
  if(countB==5){
  magic.play();
}
}

keynote2.onMouseReleased = function() {
if(countB==0 || cover1.visible === true){
 cover2.visible = true
 countB++;
 print(countB);
 }else{
cover3.visible = false
cover4.visible = false
cover5.visible = false
cover6.visible = false
countB=0}
 }

keynote3.onMousePressed = function() {
if(countB==0 || cover2.visible === true){
  noteLa.play();}
  if(countB==5){
  magic.play();
}
}

keynote3.onMouseReleased = function() {
if(countB==0 || cover2.visible === true){
 cover3.visible = true
 countB++;
 print(countB);
 }else{
cover1.visible = false
cover4.visible = false
cover5.visible = false
cover6.visible = false
countB=0}
 }
 
  keynote4.onMousePressed = function() {
if(countB==0 || cover3.visible === true){
noteMi.play();}
if(countB==5){
  magic.play();
}
}
 
 keynote4.onMouseReleased = function() {
if(countB==0 || cover3.visible === true){
 cover4.visible = true
 countB++;
 print(countB);
 }else{
cover1.visible = false
cover2.visible = false
cover5.visible = false
cover6.visible = false
countB=0}
 }
 
  keynote5.onMousePressed = function() {
if(countB==0 || cover4.visible === true){
 noteSol.play();}
 if(countB==5){
  magic.play();
}
  }
 
 keynote5.onMouseReleased = function() {
if(countB==0 || cover4.visible === true){
 cover5.visible = true
 countB++;
 print(countB);
 }else{
cover1.visible = false
cover2.visible = false
cover3.visible = false
cover6.visible = false
countB=0}
 }

  keynote6.onMousePressed = function() {
if(countB==0 || cover5.visible === true){
noteRe.play();}
if(countB==5){
  magic.play();
}
}
 
  keynote6.onMouseReleased = function() {
if(countB==0 || cover5.visible === true){
 cover6.visible = true
 countB++;
 print(countB);
 }else{
cover1.visible = false
cover2.visible = false
cover3.visible = false
cover4.visible = false
countB=0}
 }
 

}

function keyPressed(){
  toymouse.friction = 0.9;
  if(keyCode == RIGHT_ARROW){
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

