// Tasks:
//
// - Handle top-to-bottom movement too
// - Every time the circle hits a wall, choose a random fill color
//   - Colors to choose from: (TODO: pick them)

let MOVEMENT_AMOUNT = 8;

let positionX = 300;
let movingRight = true;

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

  // Draw the moving shapes

  fill("#ffffff");
  ellipse(positionX, 300, 100, 100);
  fill("#000000")
  text("J", positionX, 300 + 5);
}
