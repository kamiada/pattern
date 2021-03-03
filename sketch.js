let squaresX = 80;
let squaresY = 80;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(68, 194, 253);
  noStroke();
  for (let i = 0; i < squaresX.length; i++) {
    rect(200, 200, 50, 50);
    console.log(i);
  }
  for (var rectNum = 0; rectNum <= 8; rectNum += 1) {
    fill(rectNum * 32);
    rect(mouseX + rectNum * 20, mouseY, 20, 60);
  }

}