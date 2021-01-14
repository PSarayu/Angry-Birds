class Bird{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:1,
            density:1.0
       }
       this.body=Bodies.rectangle(x,y,50,50,options)
       this.width=50;
       this.height=50;
     World.add(world,this.body)
    }

    display(){
    var posit=this.body.position;
    posit.x=mouseX;
    posit.y=mouseY;
    var ang= this.body.angle
    push();
    translate(posit.x,posit.y)
    rotate(ang)
    fill("yellow")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop();
    }
}