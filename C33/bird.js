class bird extends clasebase {
    constructor(x, y ){
        super(x, y, 50, 50)
        this.image = loadImage("sprites/bird.png")
        this.smokeImag = loadImage("sprites/smoke.png")
        this.trayectory = []
    }
    display(){
       // this.body.position.x = mouseX
       // this.body.position.y = mouseY
        super.display();
        if(this.body.velocity.x>10 && this.body.position.x>200){
            var position = [this.body.position.x,this.body.position.y]
            this.trayectory.push(position)
        }
        for(var I = 0 ; I<this.trayectory.length; I++){
            image(this.smokeImag,this.trayectory[I][0],this.trayectory[I][1])
        }
    }
}