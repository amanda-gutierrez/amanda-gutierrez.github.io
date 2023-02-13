//var canvas = document.getElementById("mycanvas");
let mouseSketch = function(p){

  p.setup = function() {
    this.createCanvas(400, 400);
  }

  p.draw = function() {
    this.background(220);
      if (this.mouseIsPressed) {
      this.fill(0);
    } else {
      this.fill(255);
    }
    this.ellipse(this.mouseX, this.mouseY, 80, 80);
  }
}

let p5MOuse = new p5(mouseSketch, "mouse-follow");
