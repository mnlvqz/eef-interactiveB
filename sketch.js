let videoIn;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  let constrains = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment",
      },
    },
  };

  videoIn = createCapture(VIDEO, constrains);
}

function draw() {
  background(64);
  //image(videoIn, 0, 0, width, (width * videoIn.height) / videoIn.width);
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
