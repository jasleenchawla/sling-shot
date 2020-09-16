class Bird extends BaseClass{
  constructor(x,y){
    //setup
    super(x,y,50,50);
    //image is loaded
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    //move acc to the mouse
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //display
    super.display();
  }
}