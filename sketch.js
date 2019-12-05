var capping=0
t=255
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
	background(90,90,130);
}


function draw() {
   //an RGB color for the canvas' background
  //circle
  stroke(255,255,127); // an RGB color for the circle's border
  fill(300,300,150,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/5,height/10,100,40); // center of canvas, 20px dia
  fill(300,300,150,150);
  ellipse(100,50,20,200);
  fill(250,250,250,250);
  triangle(200,250,80,100,150,50);
  textSize(32);
text('leek', 10, 30);
fill(0, 102, 153);
text('leek', 10, 60);
fill(0, 102, 153, 51);
text('leek', 10, 90);
  line(capping,70,300,capping);
  line(capping,300,70,capping);
  line(capping,600,140,capping);
  line(capping,140,600,capping);
 
}

 function mousePressed(){
 	capping=capping+4
 }

  
  


