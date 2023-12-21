let videoIn;
let shader;

function preload() {
  shader = loadShader("assets/effect.vert", "assets/effect.frag");
}

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
  shader(shader);
  camShader.setUniform("tex0", videoIn);
  camShader.setUniform("mouseX", mouseX / width);

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
