class ground {
    constructor(x,y,w,h){
        var ground_options={
  
            isStatic:true
          }

        this.body=Bodies.rectangle(x,y,w,h,ground_options);
        World.add(myworld,this.body);
        this.image=loadImage("sprites/ground.png")

        this.w = w
        this.h = h
    }
    display(){
        push()
        fill("grey")
        imageMode(CENTER) 
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
        pop()
    }
}