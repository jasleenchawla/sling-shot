class slingshot{
    constructor(bodyA, pointB){
        var options={
            //bodyB will move as per bodyA
            bodyA:bodyA,
            pointB:pointB,
            //positioning
            length:10,
            stiffness:0.5
            


        }
        //adding options
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);


    }
    //fly function so that mouse is released
    fly(){
        this.chain.bodyA = null;
    }
    display(){
        if(this.chain.bodyA)  {
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x, pointA.y,pointB.x, pointB.y);
    }
}
}