class Drops{
    constructor(x,y,radius){
        var options = {
            friction: 0.1
        }
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        this.x = x;
        this.y = y;   
        this.color = "blue";
        World.add(world,this.body);
    }
    
    update(){


    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        //translate(pos.x,pos.y);
        //rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
       
    }
}