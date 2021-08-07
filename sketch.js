var bg,b_g;
var sleepImg,astronaut;
var bathImg;
var eatImg;
var gymImg1;
var gymImg2;
var moveImg,brushImg;

function preload(){
  bg=loadImage("iss.png");
  sleepImg=loadAnimation("sleep.png");
  bathImg=loadAnimation("bath1.png", "bath2.png");
  drinkImg=loadAnimation("drink1.png","drink2.png");
  eatImg=loadAnimation("eat1.png","eat2.png");
  gymImg1=loadAnimation("gym1.png","gym2.png");
  gymImg2=loadAnimation("gym11.png","gym12.png");
  moveImg=loadAnimation("move.png","move_1.png");
  brushImg=loadAnimation("brush.png");

}

function setup() {
  createCanvas(800,400);
  b_g=createSprite(400,200,400,300);
  b_g.addImage(bg);
  b_g.scale=0.14;

  astronaut=createSprite(400,230,10,10);
  astronaut.addAnimation("sleeping",sleepImg);
  astronaut.scale=0.1;

  
}


function draw() {
  background("white"); 
  
  if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brushImg);
astronaut.changeAnimation("brushing");
astronaut.y=250;
  }

  if(keyDown("DOWN_ARROW")){
    
   
    astronaut.addAnimation("gymming_1",gymImg1);
    astronaut.changeAnimation("gymming_1");


    astronaut.y=270
      }

      if(keyDown("LEFT_ARROW")){
        astronaut.addAnimation("eating",eatImg);
        astronaut.changeAnimation("eating");
       
        
        
          }

          if(keyDown("RIGHT_ARROW")){
            astronaut.addAnimation("bathing",bathImg);
            astronaut.changeAnimation("bathing");
            astronaut.y=270;
              }

              if(keyDown("SPACE")){
                astronaut.addAnimation("moving", moveImg);
                astronaut.changeAnimation("moving");

                astronaut.x=400;
                astronaut.y=200;
                astronaut.scale=0.1;
                  }

                  

         
  drawSprites();
  fill("red");
  textSize(28);
  textFont("Gabriola")
  textStyle(BOLD);
  text("Press the Arrow Keys and Spacebar to see Daily Routine!!",120,70);
 

}