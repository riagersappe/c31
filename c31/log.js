class log extends base{
    constructor(x,y,w,h,angle){
       
        super(x,y,w,h,angle)
        Matter.Body.setAngle(this.body,angle)
        this.image=loadImage("sprites/wood2.png")
    }
}