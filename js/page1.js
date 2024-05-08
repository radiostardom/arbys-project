var bg;
var ufo;
var ufolight;
var arbys;
var pole;
var regular;
var haunted;
var font;
var font2;

let yOffset = 0;
let amplitude = 20;
let speed = 0.02;

function setup() {
  createCanvas(650, 2300);
  font = loadFont('/font/Codystar-Regular.ttf');
  font2 = loadFont('/font/CuteFont-Regular.ttf');
  bg = loadImage('/img/lights.png');
  ufo = loadImage('/img/ufo.png');
  ufolight = loadImage('/img/ufolight.png');
  arbys = loadImage('/img/glowingarbys.png');
  pole = loadImage('/img/Pole.png');
  regular = loadImage('/img/regular.png');
  haunted = loadImage('/img/haunted.png');
}

function draw() {
  background(bg);
  
  glow(color('#70D638B2'),100);
  image(ufolight, -80, 90 + yOffset);
  glow(color('#FDE089'), 0);
  image(ufo, 0, -70 + yOffset);
  image(pole, 320, 1000);
  image(regular, 10, 2000); 
  glow(color('#FFD556'), mouseY*0.1); 
  image(arbys, 175, 800, 300, 300);  
   
  
  yOffset = sin(frameCount * speed) * amplitude;
  
  fill('#FDE089');
  textFont(font);
  textSize(80);
  textAlign(CENTER);
  text('L\nI\nG\nH\nT\nS', 320, 300);

  glow(color('#FDE089'), 0);
  fill('#FFFFFF');
  textFont(font2);
  textSize(30);
  textAlign(LEFT);
  text('seen in the\nsky above\nthe Arby\'s.', 360, 1150+ (yOffset*0.5));
  textAlign(RIGHT);
  text('Not the\nglowing sign\nof Arby\'s;', 300, 1450+ (yOffset*0.5));
  textAlign(LEFT);
  text('something\nhigher and\nbeyond that.', 360, 1850+ (yOffset*0.5));
  
  if(mouseY > 2000){
    glow(color('#4CAF50'), 100);
    image(haunted, 10, 2000); 
  }

  if(mouseY < 2000){
    cursor(ARROW);
  } else {
    cursor(HAND);
  }
}

function mousePressed() {
  if (mouseY > 2000) {
    window.location.href = '../page2.html';
  }
}

function glow(glowColor, blurriness){
  drawingContext.shadowBlur = blurriness;
  drawingContext.shadowColor = glowColor;
}