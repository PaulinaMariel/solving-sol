// Four-part drawing with a different line direction in each part.

function setup() {
  createCanvas (400,400);
  background("pink");
}

function draw(){
  stroke(255)
  line(40,40,360,40)//topline
  line(360,40,360,360)//rightdownline
  line(360,360,40,360)//bottomline
  line(40,360,40,40)//leftupline
  stroke(255)
  line(360,40,350,35)
  line(360,40,350,45)//toprightarrows
  line(360,360,365,350)
  line(360,360,355,350)//rightdownarrows
  line(40,360,50,365)
  line(40,360,50,355)//bottomleftarrows
  line(40,40,45,50)
  line(40,40,35,50)//topleftarrows
}
  

