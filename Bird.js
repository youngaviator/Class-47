class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,100,100);
    this.image = loadImage("sprites/Missle.png");
    //this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 5 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){

      push()
      fill ("grey")
      ellipse(this.trajectory[i][0], this.trajectory[i][1], 10, 10);
      pop()
    }
  }
}
