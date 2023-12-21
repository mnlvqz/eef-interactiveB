let videoIn;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  let constrains = {
    audio: false,
    video: {
      width: { min: 640, ideal: 1280 },
      height: { min: 480, ideal: 720 },
      facingMode: {
        exact: "environment",
      },
    },
  };

  videoIn = createCapture(VIDEO, constrains);
  videoIn.hide();
}

function draw() {
  background(64);
  videoIn.loadPixels();

  for (let i = 0; i < 1280; i++) {
    for (let j = 0; j < 720; j++) {
      let index = 4 * ((y + j) * width * d + (x + i));
      // Red.
      videoIn.pixels[index] = 0;
      /*
      // Green.
      videoIn.pixels[index + 1] = 0;
      // Blue.
      videoIn.pixels[index + 2] = 0;
      // Alpha.
      videoIn.pixels[index + 3] = 255;
      */
    }
  }

  videoIn.updatePixels();

  image(
    videoIn,
    -windowWidth * 0.5,
    -windowHeight * 0.5,
    windowWidth,
    windowHeight
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
