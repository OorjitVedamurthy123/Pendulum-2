const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constrained = Matter.Constraint;

var engine, world;
var pendulum;




function setup(){
    var canvas = createCanvas(300,400);

    engine = Engine.create();
    world = engine.world;

    
   
    pendulum = new Pendulum(200,300);
    hold = new Hold(pendulum.body,{x:100,y:100})

}

function draw(){
    background(0);
    Engine.update(engine);
   console.log(hold);
   
    pendulum.display();
    
    hold.display();
}
function mouseDragged(){
    Matter.Body.setPosition(pendulum.body,{x:mouseX,y:mouseY});
}
