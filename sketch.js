let video;

function setup() {
  createCanvas(400, 400, WEBGL);
  video = createCapture(VIDEO);
}

function draw() {
  background(220);
  image(video, 0, 0, width, (width * video.height) / video.width);
}
