particles = [];
var galaxy;
var font;

const numStars = 500;
let stars = [];

let letters;
let spacing = 60;

let img;
let imgSize = 200;

function preload() {
  img = loadImage("img/alien.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  font = loadFont('font/CuteFont-Regular.ttf');

  letters = split("INVADERS\nFROM\nANOTHER\nWORLD.", "\n");
  textAlign(CENTER, CENTER);
  textSize(48);
}

function draw() {
  background(0, 50);

  const acc = map(mouseX, 0, width, 0.005, 0.2);

  stars = stars.filter((star) => {
    star.draw();
    star.update(acc);
    return star.isActive();
  });

  while (stars.length < numStars) {
    stars.push(new Star(random(width), random(height)));
  }
  
  textFont(font);
  fill(0, 255, 0); // fill color green
  textAlign(CENTER, CENTER);
  textLeading(50);

  // check if the mouse is over the text
  let yOffset = (height - (letters.length - 1) * spacing) / 2;
  for (let i = 0; i < letters.length; i++) {
    let x = width / 2;
    let y = yOffset + i * spacing;
    let d = dist(x, y, mouseX, mouseY);
    let letterSize = map(d, 0, 300, 150, 100);
    textSize(letterSize);
    text(letters[i], x, y);

    // if mouse is over the text, display the image
    if (d < letterSize / 2) {
      image(img, mouseX - 55, mouseY - 50, img.width * 2, img.height * 2);
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  }
}

class Star {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.prevPos = createVector(x, y);

    this.vel = createVector(0, 0);

    this.ang = atan2(y - height / 2, x - width / 2);
  }

  isActive() {
    return onScreen(this.prevPos.x, this.prevPos.y);
  }

  update(acc) {
    this.vel.x += cos(this.ang) * acc;
    this.vel.y += sin(this.ang) * acc;

    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw() {
    const alpha = map(this.vel.mag(), 0, 3, 0, 255);
    stroke(255, alpha);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
  }
}

function onScreen(x, y) {
  return x >= 0 && x <= width && y >= 0 && y <= height;
}

function mousePressed() {

  let yOffset = (height - (letters.length - 1) * spacing) / 2;
  for (let i = 0; i < letters.length; i++) {
    let x = width / 2;
    let y = yOffset + i * spacing;
    let d = dist(x, y, mouseX, mouseY);
    let letterSize = map(d, 0, 300, 150, 100);
    
    if (d < letterSize / 2) {
      // redirect to a new page
      window.location.href = "page4.html";
    }
  }
}
