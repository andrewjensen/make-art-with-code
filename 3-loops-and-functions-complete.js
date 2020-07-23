let PEAK_COUNT = 6;
let PEAK_WIDTH = 800 / PEAK_COUNT;
let PEAK_HEIGHT_MAX = 100;
let PEAK_HEIGHT_MIN = 20;

function setup() {
  createCanvas(800, 600);

  noLoop();
  noStroke();
}

function draw() {
  background("#cad2c5");

  drawMountainRange(240, 3, "#84a98c");
  drawMountainRange(360, 7, "#52796f");
  drawMountainRange(480, 11, "#354f52");
}

function drawMountainRange(yBase, peakCount, color) {
  let peakWidth = 800 / peakCount;

  fill(color);

  beginShape();

  // Left edge
  vertex(0, yBase);

  // Peaks!
  for (let index = 0; index < peakCount; index++) {
    // Peak
    let peakX = (index * peakWidth) + (peakWidth / 2);
    let peakHeight = random(PEAK_HEIGHT_MIN, PEAK_HEIGHT_MAX);
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
