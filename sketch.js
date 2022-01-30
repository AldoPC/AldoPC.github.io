let t = 0;
let w=300;
let frameFreeze=false;
let timer = 0;
var canvasDiv = document.getElementById('wave');
var width = canvasDiv.clientWidth;
var height = canvasDiv.clientHeight;

function setup() {
var canvasDiv = document.getElementById('wave');
var width = canvasDiv.clientWidth;
var height = canvasDiv.clientHeight;
  var myCanvas = createCanvas(width, height);
   myCanvas.parent("wave");
}

function draw() {
  background("#212529");
  strokeWeight(3)
  stroke(255)
  noFill(t++)
  translate(0,-149)
  for(j=6;j>0;j--){
    beginShape();
    for(i=0;i<100;i++){
      curveVertex(i*6,cos(i/6+(t+j*10)/20)*sin(i/(PI*10))*w/2+w);
      let value = cos(i/6+(t+j*10)/20)*sin(i/(PI*10))*w/2+w;
     
      }
  endShape()
  }
  timer++;

  
}



  
