function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background("#E7E7D2");

  text('"Spectrum Colors Arranged by Chance I to VIII" - Kelly Ellsworth', 15, windowHeight - 15);
  
  let horProbability = 0.0;
  let verProbability = 0.0;
  
  let gridSize = 20; // Size of each square
  let rows = Math.floor(windowHeight / gridSize);
  let cols = Math.floor(windowWidth / gridSize);

  for (let row = 2; row < rows; row++) {
    horProbability = 0;
    for (let col = 2; col < cols; col++) {
      if (random(1) < horProbability && random(1) < verProbability) {

        // Randomly pick a color from the palette
        let fillColor = random(["#9D362D", "#F5D863", "#51A8CD", "#8CAD65", "#774267", "#D98C46", "#D7A9A9", "#000000", "#3D6165"]);
        fill(fillColor);

        let x = col * gridSize;
        let y = row * gridSize;

        // Draw the square
        rect(x, y, gridSize, gridSize);
      }

      // Make the probability of drawing a square increase as we move to the right and decrease after the middle
      if (col < cols / 2) {
        horProbability += 0.05;
      } else {
        horProbability -= 0.05;
      }
    }

    // Make the probability of drawing a square increase as we move down and decrease after the middle
    if (row < rows / 2) {
      verProbability += 0.07;
    } else {
      verProbability -= 0.07;
    }
  }
}
