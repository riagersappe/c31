class base {
    constructor(x,y,w,h,angle){
        var ground_options={
  
            isStatic:false,
            restitution:0.7,
            friction:1
        
          }

        this.body=Bodies.rectangle(x,y,w,h,ground_options);
        World.add(myworld,this.body);
        this.image=loadImage("sprites/base.png")

        this.w = w
        this.h = h
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("red") 
        imageMode(CENTER) 
        image(this.image,0,0,this.w,this.h)
        pop()
    }
}