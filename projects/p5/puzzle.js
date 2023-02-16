

let puzzleSketch = function(p){
    let img;
    p.preload = function(){
        img = p.loadImage('images/redTrees.jpg');
    } 
    const canvasSize = 500;
    p.setup = function(){
        p.createCanvas(canvasSize, canvasSize + 50);
        this.background(220);

        //image(img, 0, 0);

        let button = p.createButton("start");
        const buttonWidth = 55;
        const buttonHeight = 25;
        button.size(buttonWidth, buttonHeight);
        button.position(canvasSize / 2 - buttonWidth / 2, 25 + canvasSize);
      }
      p.draw = function() {
      }

}

let p5Puzzle = new p5(puzzleSketch, "puzzle");



