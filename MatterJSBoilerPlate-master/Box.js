class Box {

constructor(x,y,width,height){
var options = {
    static:true
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
   
    
    
    rect(pos.x,pos.y,this.width,this.height);
   
}

}















