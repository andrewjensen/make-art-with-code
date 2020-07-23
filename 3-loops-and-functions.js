// Tasks:
//
// - Make each peak a random height, between 20 and 100 pixels tall
// - Add two more mountain ranges
//
// Settings to use for each mountain range:
//
// - yBase = 240, peakCount = 3,  color = #84a98c
// - yBase = 360, peakCount = 7,  color = #52796f
// - yBase = 480, peakCount = 11, color = #354f52

let PEAK_COUNT = 6;
let PEAK_WIDTH = 800 / PEAK_COUNT;
let PEAK_HEIGHT = 100;

function setup() {
  createCanvas(800, 600);

  noLoop();
  noStroke();
}

function draw() {
  background("#cad2c5");

  let yBase = 240;
  let peakCount = 7;
  let color = "#84a98c";

  let peakWidth = 800 / peakCount;

  fill(color);

  beginShape();

  // Left edge
  vertex(0, yBase);

  // Peaks!
  for (let index = 0; index < peakCount; index++) {
    // Peak
    let peakX = (index * peakWidth) + (peakWidth / 2);
    let peakHeight = PEAK_HEIGHT;
    let peakY = yBase - peakHeight;
    vertex(peakX, peakY);

    // Point below and to the right of the peak
    let rightBaseX = (index * peakWidth) + peakWidth;
    let rightBaseY = yBase;
    vertex(rightBaseX, rightBaseY);
  }

  // Right, bottom of screen
  vertex(800, 600);

  // Left, bottom of screen
  vertex(0, 600);

  endShape(CLOSE);
}
