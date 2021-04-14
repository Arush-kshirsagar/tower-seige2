class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':0.2
         // 'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility=255;
      
      //this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      if(this.body.speed<3){
        this.body.display();
      }
      else{
       World.remove(world,this.body);
       push();
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
      }
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("orange")
      rect( 0, 0, this.width, this.height);
      
      pop();
    }
  }