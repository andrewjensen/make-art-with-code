// Tasks:
//
// - Change the DATASET values
//   - Ages of each student
//   - Day of the month of each student's birthday
//   - etc.
// - Change the other constants to tweak the aesthetics
//   - Center vertically
//   - Add/remove padding
//   - Change shape of the tick marks

let POSTER_PADDING_X = 48;
let POSTER_PADDING_Y = 48;
let ROW_PADDING_Y = 8;
let TICK_PADDING_X = 8;
let TICK_WIDTH = 4;
let TICK_HEIGHT = 12;

let DATASET = [5, 10, 15, 20, 25, 30, 35, 40];

function setup() {
  createCanvas(600, 800);

  noLoop();
  rectMode(CENTER);

  noStroke();
  fill("#bfc0c0");
}

function draw() {
  background("#2d3142");

  for (let rowIndex = 0; rowIndex < DATASET.length; rowIndex++) {
    let tickCount = DATASET[rowIndex];

    let baseY = (rowIndex * (TICK_HEIGHT + ROW_PADDING_Y)) + POSTER_PADDING_Y;

    for (let tickIndex = 0; tickIndex < tickCount; tickIndex++) {
      let tickX = (tickIndex * (TICK_WIDTH + TICK_PADDING_X)) + POSTER_PADDING_X;
      rect(tickX, baseY, TICK_WIDTH, TICK_HEIGHT);
    }
  }
}
