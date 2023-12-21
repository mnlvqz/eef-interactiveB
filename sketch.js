let videoIn;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  let constrains = {
    audio: false,
    video: {
      width: width,
      height: height,
      aspectRatio: 1,
      facingMode: {
        exact: "environment",
      },
    },
  };

  videoIn = createCapture(VIDEO, constrains);
}

function draw() {
  background(220);
  //image(videoIn, 0, 0, width, (width * videoIn.height) / videoIn.width);
  fill(255);
  rect(-width * 0.5, -width * 0.5, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
