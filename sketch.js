const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var batman, umbrella;
var maxDrops = 100;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(450,800);
    
    if(frameCount % 150 === 0){
        for(var i = 0; i < maxDrops; i++){
            maxDrops.push(new createDrop(random(0,400), random(0,400)));
        }
    }
}

function draw(){
    background("black");

   
}   

if(this.rain.position.y > height){
    Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
}