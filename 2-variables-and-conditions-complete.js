let MOVEMENT_AMOUNT = 8;
let CIRCLE_COLORS = [
  "#FFBE0B",
  "#FB5607",
  "#FF006E",
  "#73C31D",
  "#8338EC",
  "#3A86FF"
];

let positionX = 300;
let positionY = 300;
let movingRight = true;
let movingDown = true;
let circleColor;

function setup() {
  createCanvas(800, 600);

  textAlign(CENTER, CENTER);
  textSize(60);
  textStyle(BOLD);

  noStroke();

  circleColor = random(CIRCLE_COLORS);
}

function draw() {
  background("#000000");

  // Handle side-to-side movement

  if (movingRight) {
    positionX = positionX + MOVEMENT_AMOUNT;
  } else {
    positionX = positionX - MOVEMENT_AMOUNT;
  }

  if (positionX <= 0) {
    movingRight = true;
    circleColor = random(CIRCLE_COLORS);
  } else if (positionX >= 800) {
    movingRight = false;
    circleColor = random(CIRCLE_COLORS);
  }

  // Handle up-and-down movement

  if (movingDown) {
    positionY = positionY + MOVEMENT_AMOUNT;
  } else {
    positionY = positionY - MOVEMENT_AMOUNT;
  }

  if (positionY <= 0) {
    movingDown = true;
    circleColor = random(CIRCLE_COLORS);
  } else if (positionY >= 600) {
    movingDown = false;
    circleColor = random(CIRCLE_COLORS);
  }

  // Draw the moving shapes

  fill(circleColor);
  ellipse(positionX, positionY, 100, 100);
  fill("#000000")
  text("J", positionX, positionY + 5);
}
