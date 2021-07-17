class Connection{
    constructor(p,b){
        var connectionproperties={
            bodyA:p, 
            bodyB:b,
            stiffness:0.1,
            length:200
        }
        this.connection=Constraint.create(connectionproperties)
        World.add(world,this.connection)
    }
    
    display(){
var a=this.connection.bodyA.position
var b=this.connection.bodyB
line (a.x,a.y,b.position.x,b.position.y)
    }
}