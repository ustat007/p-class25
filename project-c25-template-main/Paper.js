class Paper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }

        this.radius=radius;
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x, this.y,( this.radius-20)/2, options);
        this.IMG=loadImage("paper.png")
        World.add(world, this.body);   
    }

display()
{
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
   // image(picturename,x pos,y pos,width,height)
    image(this.IMG,0, 0,this.radius,this.radius);
    pop();
};
};
