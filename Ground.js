class Ground {
    constructor(x,y,width,height) {
      
      var options = {
        //static position
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //adding to world
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode will be in center
      rectMode(CENTER);
      //color
      fill("brown");
      //position
      rect(pos.x, pos.y, this.width, this.height);
    }
  };