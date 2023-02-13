//var canvas = document.getElementById("mycanvas");
let tomatoSketch = function(p){
    p.setup = function(){
    p.createCanvas(400, 400);
    this.background(255, 255, 255);

    // tomato
    this.noStroke();
    this.fill(224, 90, 90);
    this.ellipse(150, 200, 150, 150);
    this.ellipse(212, 200, 150, 150);

    // stem
    this.fill(48, 130, 31);
    this.rect(176, 103, 12, 32);
  }

  p.draw = function() {

    // take a bite out of the tomato!
    this.fill(255, 255, 255);
    this.ellipse(this.mouseX, this.mouseY, 74, 66);
  }

}

let p5Tomato = new p5(tomatoSketch, "eating-tomato");
