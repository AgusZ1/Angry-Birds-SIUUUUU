class slimeShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length  : 10
        }
        this.slime1 = loadImage("sprites/SlimeShot1.png")
        this.slime2 = loadImage("sprites/SlimeShot2.png")
        this.slime3 = loadImage("sprites/SlimeShot3.png")
        this.pointB = pointB
        this.body = Constraint.create(options)
        World.add(world, this.body)
    }
    attach(body){
    this.body.bodyA = body 
    }

    fly(){
        this.body.bodyA = null 
    }

    display(){
     image(this.slime1,200,20)
     image(this.slime2,170,20)
     if(this.body.bodyA){
        var pointA = this.body.bodyA.position
        var pointB = this.pointB 
        push()
    
        if(pointA.x<220){
            strokeWeight(7)
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3)
            image(this.slime3,pointA.x-30,pointA.y-10,15,30)  
        }
        else{
            strokeWeight(3)
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3)
            image(this.slime3,pointA.x+25,pointA.y-10,15,30)
            
        }
        pop();
     }
     
    }
}