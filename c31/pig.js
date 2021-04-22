class pig extends base{
    constructor(x,y,w,h){
       
        super(x,y,w,h)
        this.image=loadImage("sprites/enemy.png")
        this.vis = 255
    }
    display(){
        
        push()
        if(this.body.speed < 1){
            super.display()
            
        }
        else {
            World.remove(myworld,this.body)
            this.vis = this.vis - 10
            tint(255,this.vis)
            image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
        }
        pop()

    }
}