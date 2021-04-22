class slingshot {
    constructor(a,b,l,s,w){
        var constraint = {
            bodyA:a,
            pointB:b,
            length:l,
            stiffness:s
          }
        
        this.s1 = loadImage("sprites/sling1.png")
        this.s2 = loadImage("sprites/sling2.png")
        this.s3 = loadImage("sprites/sling3.png")

          this.sling1 = Matter.Constraint.create(constraint);
          World.add(myworld,this.sling1);
          this.w = w
    }
    display(){

        image(this.s1,200,150)
        image(this.s2,170,140)
        
        if(this.sling1.bodyA != null){
        if(this.sling1.bodyA.position.x<200){
        image(this.s3,this.sling1.bodyA.position.x-25,this.sling1.bodyA.position.y-10,20,30)
        strokeWeight(this.w);
        stroke(49,23,8)
        line(this.sling1.bodyA.position.x-20,this.sling1.bodyA.position.y,this.sling1.pointB.x-20,this.sling1.pointB.y-15);
        line(this.sling1.bodyA.position.x-20,this.sling1.bodyA.position.y,this.sling1.pointB.x+20,this.sling1.pointB.y-15);
            }
        if(this.sling1.bodyA.position.x>200){
            image(this.s3,this.sling1.bodyA.position.x+25,this.sling1.bodyA.position.y-10,20,30)
            strokeWeight(this.w);
            stroke(49,23,8)
            line(this.sling1.bodyA.position.x+20,this.sling1.bodyA.position.y,this.sling1.pointB.x-20,this.sling1.pointB.y-15);
            line(this.sling1.bodyA.position.x+20,this.sling1.bodyA.position.y,this.sling1.pointB.x+20,this.sling1.pointB.y-15);
            }
        }
    }
    fly(){
        this.sling1.bodyA = null
    }
    attach(a){
        this.sling1.bodyA = a
    }
}