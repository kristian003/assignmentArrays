var circleY = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
var circleSpeed = [1, 1, 3, 1, 1, 3, 1, 1, 3, 1];

function draw() {
  createCanvas (200,200);
  background(200);
  noStroke();
  fill(255,140,40);
  

  for(var i = 0; i < 10; i++){
    ellipse(i*10+5, circleY[i], 10, 10);
    circleY[i] += circleSpeed[i];
    if(circleY[i] < 0 || circleY[i] > height){
      circleSpeed[i] *= -1 ;
    }
  }
}

