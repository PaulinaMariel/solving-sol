// Wall Drawing #45 (1970)
//Straight lines 10" (25 cm) long, not touching, covering the wall evenly.

function setup(){
  createCanvas(540,535);
  background("pink");
}

function draw(){
  for (var y=10; y<535; y+=35){
    for (var x=10; x<535; x+=10){
      stroke ("black");
      line (x,y,x,y+25)
    }
  }
}

