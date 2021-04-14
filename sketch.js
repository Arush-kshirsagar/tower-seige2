const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground2,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,ball,polygonImg,canvas;
function preload(){
    polygonImg=loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(900,1200)
    engine=Engine.create();
    world=engine.world;
Engine.run(engine);
    ground=new Ground(350,400,190,10);
   // use two stands,one on right and on to left
   
   box1=new Box(300,300,50,50);
    box2=new Box(350,300,50,50);
    box3=new Box(400,300,50,50);
    box4=new Box(350,100,50,50);
    box5=new Box(380,200,50,50);
    box6=new Box(330,200,50,50);

   
ground2=new Ground(550,400,190,10);


    box7=new Box(500,300,50,50);
    box8=new Box(550,300,50,50);
    box9=new Box(600,300,50,50);
    box10=new Box(550,100,50,50);
    box11=new Box(580,200,50,50);
    box12=new Box(530,200,50,50);
    //max 10 boxes for 1 and 5 for two
      ball=Bodies.circle(50,200,20);
      World.add(world,ball)
    
     slingshot = new SlingShot(this.ball,{x:100, y:200});

}
function draw(){
    
    background("black");
    ground.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    // make text,display everything,fill after box
    imageMode(CENTER);
    image(polygonImg,ball.position.x,ball.position.y,40,40);
    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}