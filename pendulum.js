class Pendulum extends BaseClass{
  
  constructor(x,y){
    var options ={
      isStatic : true
    }
   
    super(x,y,50,50,options);
    
    
    
  }
  display(){
   //this.body.position.x = mouseX;
   //this.body.position.y = mouseY;

   strokeWeight(4);
   stroke("blue");
   fill("red");
    super.display();
  }
  
}