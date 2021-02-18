class Paper{
    constructor(){
        var options = {
            isStatic : false
        }

        this.r = 50,

        this.image=loadImage("paper.png")
        this.body = Bodies.circle(100,600,this.r,options);
        World.add(world,this.body);
    }

    display(){
        var paperPos=this.body.position;	
		push()
		translate(paperPos.x, paperPos.y);
		rotate(this.body.angle)
        imageMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
    }
}