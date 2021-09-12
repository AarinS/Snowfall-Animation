const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var runner,runnerImg;
var ice=[];
var maxSnow=25

function preload(){
  bg=loadImage("snow1.jpg");
  
}

function setup() {
  createCanvas(1300,600);
  
  engine=Engine.create();
  world= engine.world;
  






if(frameCount % 200 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1300), random(0,50)));
  }
  }


}

function draw() {
  background(bg);  
  Engine.update(engine);

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    
    




  
  drawSprites();

}