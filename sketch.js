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
