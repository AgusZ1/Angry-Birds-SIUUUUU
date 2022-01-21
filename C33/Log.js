class Log extends clasebase{
    constructor(x, y, height, angle){
        super(x, y, 20, height, angle)
        this.image = loadImage("sprites/wood2.png")
        /*this.visibility = 255 
        this.height = height 
        this.angle = angle */

        Matter.Body.setAngle(this.body, angle)
    }
    /*display(){
        if(this.body.speed<3){
            super.display();
        }
        else{World.remove(world,this.body);
        push();
        this.visibility = this.visibility -5
        tint(255,this.visibility)
        image(this.image,this.body.position.x,this.body.position.y,this.height,this.angle)
        pop();
        }
    }
    score(){
        if(this.visibility<0 && this.visibility>-1000){

        
        score += 5
        }
    }*/
}
















