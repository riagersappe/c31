class bird extends base {
    constructor(x,y,w,h){
        

       super(x,y,w,h) 
        this.image=loadImage("sprites/bird.png")
        this.dot=loadImage("sprites/smoke.png")

        this.path = []
        
    }
    display(){
        //this.body.position.x = mouseX
        //this.body.position.y = mouseY
        
        if(this.body.speed > 10 && this.body.position.x > 200){
            this.path.push([this.body.position.x,this.body.position.y])

        }

        for(var i = 0; i < this.path.length; i++){
            image(this.dot,this.path[i][0],this.path[i][1])
        }
super.display()
    }
  }