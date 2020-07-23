function setup() {
  createCanvas(600, 800);

  noLoop();

  noStroke();
  rectMode(CENTER);
}

function draw() {
  background("#001524");

  fill("#15616d");
  rect(150, 400, 100, 100);

  fill("#ffecd1");
  ellipse(300, 400, 100, 100);

  fill("#ff7d00");
  beginShape();
  vertex(400, 450);
  vertex(450, 350);
  vertex(500, 450);
  endShape(CLOSE);
}
