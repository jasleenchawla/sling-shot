class Log extends BaseClass {
      constructor (x,y,height,angle){
        //positioning
      super (x, y, 20, height, angle);
      //loading image
      this.image =loadImage ("sprites/wood2.png");
      //setting angle
      Matter.Body.setAngle(this.body, angle);
      
    }
  };
  