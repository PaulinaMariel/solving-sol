//Wall Drawing #614 (1989)
//Rectangles formed by 3-inch (8 cm) wide India ink bands, meeting at right angles

function setup(){
  createCanvas(600, 600);
  background("pink");
}

function draw(){
  for(var x=0; x<600; x+=60){
    stroke ("black");
    strokeWeight (8);
    line (x,0,x,600)
  }
  for(var y=0; y<600; y+=30){
    stroke ("black");
    strokeWeight (8);
    line (0,y,600,y)
  }
}
