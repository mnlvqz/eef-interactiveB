let videoIn;

function setup() {
  createCanvas(400, 400, WEBGL);
  videoIn = createCapture(VIDEO, {
    audio: false,
    video: {
      /*
      width: 280,
      height: 280,
      */
      aspectRatio: 1,
      facingMode: {
        exact: "environment",
      },
    },
  });
}

function draw() {
  background(220);
  image(videoIn, 0, 0, width, (width * videoIn.height) / videoIn.width);
}
