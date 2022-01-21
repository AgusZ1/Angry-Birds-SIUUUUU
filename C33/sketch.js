const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world
var floor1 ,floor2 
var box1, box2, box3, box4, box5
var log1, log2, log3, log4, log5
var chanchito1, chanchito2, chanchito3
var bird1
var slimeShot1
var bg = "sprite/bg1.png"
var score = 0
var backgroundImg

function preload(){
  getBackground();
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  floor1 = new Floor(400,380,800,15)
  box1 = new Box(550,370,50,50)
  box2 = new Box(700,370,50,50)
  chanchito1 = new chanchitos(630,370)
  log1 = new Log(623,350,200,PI/2)
  box3 = new Box(550,230,50,50)
  box4 = new Box(700,230,50,50)
  chanchito2 = new chanchitos(630,310)
  log2 = new Log(620,200,200,PI/2)
  box5 = new Box(620,180,50,50)
  log3 = new Log(590,120,150,PI/7)
  log4 = new Log(670,120,150,-PI/7)
  chanchito3 = new chanchitos(750,370)
  bird1 = new bird(50,100)
  slimeShot1 = new slimeShot(bird1.body,{x:200,y:50})
  floor2 = new Floor(150,305,300,170)
}




function draw() {
  if(backgroundImg)
  background(backgroundImg);
  chanchito1.score();
  chanchito2.score();
  chanchito3.score();
  textSize(18)
  text("Score: " + score, 700,50 )
  Engine.update(engine) 
  floor1.display()
  box1.display()
  box2.display()
  chanchito1.display()
  log1.display()
  box3.display()
  box4.display()
  chanchito2.display()
  log2.display()
  box5.display()
  log3.display()
  log4.display()
  chanchito3.display()
  bird1.display()
  slimeShot1.display()
  floor2.display()
  
}
function mouseDragged(){
  Matter.Body.setPosition(bird1.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
  slimeShot1.fly();
}
function keyPressed(){
  if(keyCode === 32){
    bird1.trayectory = []
    Matter.Body.setPosition(bird1.body,{x:200,y:50})
    slimeShot1.attach(bird1.body)
  }
}
async function getBackground(){
  //console.log(" Cargando... ")
  var response = await fetch("https://worldtimeapi.org/api/timezone/America/Mexico_City")
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime
  var hour = datetime.slice(11,13)
  console.log(" La hora es : " + hour)
 if(hour>= 06 && hour<= 19){
   bg = "sprites/bg.png"
 }
 else{bg = "sprites/bg2.jpg"
  console.log("cargando segunda imagen ")
}
 backgroundImg = loadImage(bg)
}
 
