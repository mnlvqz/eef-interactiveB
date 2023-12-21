let videoIn;

function setup() {
  createCanvas(400, 400, WEBGL);

  let constrains = {
    audio: false,
    video: {
      width: 280,
      height: 280,
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
  image(videoIn, 0, 0, width, (width * videoIn.height) / videoIn.width);
}
