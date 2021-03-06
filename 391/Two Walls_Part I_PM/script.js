//Wall Drawing #391 (1983)
//Two-part drawing. The two walls are each divided horizontally and vertically into four equal parts.
//First wall: 12-inch (30 cm) bands of lines in four directions, one direction in each part, drawn in black India ink.
//Second wall: Same, but with four colors drawn in India ink and color ink washes.

function setup(){
  createCanvas(720,720);
  background("white");
}

function draw(){
  for(var x=0; x<=360; x+=24){
  stroke("black");
  strokeWeight (12);
  line(x,0,x,360);
  line(360,x+360,720,x+360);
  
  line(0,360+x,x,360);
  line(0+x,720,360,360+x);

  line(360,x,720-x,360);
  line(720,x,720-x,0);
  }
}