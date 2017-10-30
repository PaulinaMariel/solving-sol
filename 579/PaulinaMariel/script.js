//Wall Drawing #579 (1988)
//Three concentric arches.
//The outside one is blue;
//the middle red;
//and the inside one is yellow.

function setup(){
  createCanvas(600, 600);
  background("pink");
}

function draw(){
noFill();
stroke ("blue");
strokeWeight (100);
ellipse(300, 600, 600, 900)

noFill();
stroke ("red");
ellipse(300, 600, 400, 700)

noFill();
stroke ("yellow");
ellipse(300, 600, 200, 500)

}