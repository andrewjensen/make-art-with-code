let MOVEMENT_AMOUNT = 8;

let positionX = 300;
let positionY = 300;
let movingRight = true;
let movingDown = true;

function setup() {
  createCanvas(800, 600);

  textAlign(CENTER, CENTER);
  textSize(60);
  textStyle(BOLD);

  noStroke();
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
  } else if (positionX >= 800) {
    movingRight = false;
  }

  // Handle up-and-down movement

  if (movingDown) {
    positionY = positionY + MOVEMENT_AMOUNT;
  } else {
    positionY = positionY - MOVEMENT_AMOUNT;
  }

  if (positionY <= 0) {
    movingDown = true;
  } else if (positionY >= 600) {
    movingDown = false;
  }

  // Draw the moving shapes

  fill("#ffffff");
  ellipse(positionX, positionY, 100, 100);
  fill("#000000")
  text("J", positionX, positionY + 5);
}
