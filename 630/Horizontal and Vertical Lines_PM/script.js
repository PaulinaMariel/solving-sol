// A wall is divided horizontally into two equal parts.
//Top: alternating horizontal black and white 8-inch (20 cm) bands.
//Bottom: alternating vertical black and white 8-inch (20 cm) bands.

var canvasHeight = 600
var canvasWidth = 600

function setup(){
  createCanvas (canvasWidth,canvasHeight)
  background (142, 127, 151)
}

function draw (){
  
//Top: alternating horizontal black and white 8-inch (20 cm) bands. 
  for (var y=0; y<canvasHeight/2; y+=40)
  {
    strokeWeight (20);
    stroke ("black");
    line (0,y,canvasWidth,y)
  }
  
  for (y=20; y<=canvasHeight/2; y+=40)
  {
    strokeWeight (20);
    stroke ("white");
    line (0,y,canvasWidth,y)
  }
  
//Bottom: alternating vertical black and white 8-inch (20 cm) bands.
  for (var x=0; x<=canvasWidth; x+=40)
  {
    strokeWeight (20);
    stroke ("black");
    line (x,canvasHeight/2,x,canvasHeight)
  }
  
  for (x=20; x<=600; x+=40)
  {
    strokeWeight (20);
    stroke ("white");
    line (x,canvasHeight/2,x,canvasHeight)
  }
  
}
