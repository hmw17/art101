let mic;
let micLevel;
let x=0;
let rat;
let img;


function preload(){
    rat=loadImage('hamburgerparrot.gif');
    
  }



function setup() {
  createCanvas(500, 500);
  
  
  
  mic = new p5.AudioIn();
  mic.start();
  
  // //rat
  // noLoop();
  
  
}

function draw() {
  
  
  
  
  background(127);
  noStroke();
  for (let i = 0; i < height; i += 20) {
    fill('#ADD8E6');
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
  }
  
  
  
  stroke('#FFC0CB');
  strokeWeight(4);
  
  //head
  fill(255);
  ellipse(250, 250, 300, 300);
  
  //ears
  fill(255);
  triangle(50, 50, 100, 220, 175, 125);
  
  fill('#FFB6C1');
  triangle(75, 75, 115, 200, 165, 135);
  
  fill(255);
  triangle(450, 50, 400, 220, 325, 125);
  
  fill('#FFB6C1');
  triangle(425, 75, 385, 200, 335, 135);
  
  //eyes
  fill('#F5DEB3');
  strokeWeight(4);
  stroke('#FFC0CB');
  ellipse(190,220,80,65);
  ellipse(310,220,80,65);
  
  // noStroke();
  // fill('#87CEFA');
  // ellipse(190,225,55,55);
  // ellipse(310,225,55,55);
  
  
  noFill();
  stroke('#FFC0CB');
  strokeWeight(5);
  arc(190, 170, 50, 30, PI, PI + QUARTER_PI, TWO_PI);
  arc(190, 170, 50, 30, PI + QUARTER_PI, TWO_PI);
  arc(310, 170, 50, 30, PI, PI + QUARTER_PI, TWO_PI);
  arc(310, 170, 50, 30, PI + QUARTER_PI, TWO_PI);
  
  // noStroke();
  // fill('#ffffff');
  // ellipse(180,210,35,30);
  // ellipse(300,210,35,30);
  
  //fill(random(255),random(255),random(255));
  //ellipse(190, 170, 45, mic.getLevel() * 600);
  //ellipse(310, 170, 45, mic.getLevel() * 600);
  
  
  //bread
  stroke('#FFC0CB');
  line(70, 250, 170, 280);
  line(70, 320, 170, 290);
  line(430, 250, 330, 280);
  line(430, 320, 330, 290);
  
 
  
  
  
  
  //mouth
  noFill();
  stroke('#FFC0CB');
  strokeWeight(5);
  //arc(225, 300, 50, 50, 0, PI);
  //arc(275, 300, 50, 50, 0, PI);
  
  
  //tongue
  fill('#FFA07A');
  //arc(250, 325, 70, 50, 0, 600);
  ellipse(250, 310, 60, mic.getLevel() * 1000);
  
  //nose
  fill(random(255),random(255),random(255));
  ellipse(250, 270, 45, 25);

  

  
  
  
  // x = x + 0.1;
  // if (x > width) {
  //   x = 0;
  // }
  // line(x, 0, x, height);
  
  
  
 
  image(rat,0,0,mouseX,mouseY);
  
  drawTable();
  drawEyeballs()
  //drawHand(mouseX);
  
}
function drawTable() {
  //table
  fill(84, 69, 72);
  rect(width * .0, height * .85, 500 ,100);
}

// function drawHand(armloc) {
//   push();
//   let armCatch = height * .7;
//   armLocation1 = armloc;
//   // armLocation2 = armloc * .3;

//   fill('#ffffff');
//   ellipse(armloc, armCatch, 60, 60);
//   fill(255, 214, 238);
//   //circle(width * .65, height * .53, 20);
//   circle(armloc, height * .71, 25);
//   //circle(width * .633, height * .49, 7);
//   circle(armloc - 8, height * .67, 7);
//   //circle(width * .67, height * .49, 7);
//   circle(armloc + 8, height * .67, 7);
//   //circle(width * .6515, height * .48, 7);
//   circle(armloc, height * .66, 7);
//   fill('#ffffff');
//   ellipse(armloc * .5, armCatch, 60, 60);
//   fill(255, 214, 238);
//   //circle(width * .65, height * .53, 20);
//   circle(armloc * .5, height * .71, 25);
//   //circle(width * .633, height * .49, 7);
//   circle(armloc * .5 - 8, height * .67, 7);
//   //circle(width * .67, height * .49, 7);
//   circle(armloc * .5 + 8, height * .67, 7);
//   //circle(width * .6515, height * .48, 7);
//   circle(armloc * .5, height * .66, 7);
//   fill('#ffffff');
//   pop();
// } 
  


function mousePressed() {
  loop();
}

// function mouseReleased() {
//   noLoop();
// }


function drawEyeballs() {
  let x1 = map(mouseX, 0, width, 330, 280, true);
  let x2 = map(mouseX, 0, width, 210, 160, true);
  let y1 = map(mouseY,0, width, 210, 250, true);
  let y2 = map(mouseY,0, width, 210, 250, true);
  fill('#87CEFA')
  ellipse (x1, y1, 50, 50);
  ellipse (x2, y2, 50, 50);
  noStroke();
  fill('#ffffff');
  ellipse(x1,y1,10,35);
  ellipse(x2,y2,10,35);
}




  
  function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  
  
}