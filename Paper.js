class Paper
{
	constructor(x, y, RADIUS) {
	var options = {
        'isStatic' : false,
        'restitution' : 0.3,
        'friction' : 0.5,
        'density' : 1.2			
    }

		this.x = x;
		this.y = y;
        this.RADIUS= RADIUS;
        
		this.body = Bodies.circle(this.x, this.y, this.RADIUS/2, options);
		World.add(world, this.body);
    }
    
	display() {
			
			var paperPos = this.body.position;		

			push();
			translate(paperPos.x, paperPos.y);
			ellipseMode(CENTER);
			strokeWeight(3);
			fill(255,0,255);
			ellipse(0,0,this.r, this.r);
			pop();
			
	}

}
