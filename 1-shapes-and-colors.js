// Tasks:
//
// - Swap the color of the rectangle and the triangle
// - Realign the shapes so they are in a row in the center of the canvas
//   - Rectangle's center should be 1/4 of the way across the canvas
//   - Circles's center should be 1/2 of the way across the canvas
//   - Triangle's center should be 3/4 of the way across the canvas

function setup() {
  createCanvas(600, 800);

  noLoop();

  noStroke();
  rectMode(CENTER);
}

function draw() {
  background("#001524");

  fill("#ff7d00");
  rect(100, 100, 100, 100);

  fill("#ffecd1");
  ellipse(200, 200, 100, 100);

  fill("#15616d");
  beginShape();
  vertex(250, 350);
  vertex(300, 250);
  vertex(350, 350);
  endShape(CLOSE);
}
