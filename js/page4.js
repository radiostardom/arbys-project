var font;
var bg;
var tv;
var button1;
var button2;
var screen1;
var screen2;
var screen3;
var screen4;
var button1Rotation = 0;
var button2Rotation = 0;
var currentScreen = 1; // store the current screen
var darknessLevel = 0; // initial darkness level

function setup() {
  createCanvas(600, 400);
  bg = loadImage('img/tvbg.png');
  tv = loadImage('img/tv.png');
  button1 = loadImage('img/button1.png');
  button2 = loadImage('img/button2.png');
  screen1 = loadImage('img/screen1.gif');
  screen2 = loadImage('img/screen2.gif');
  screen3 = loadImage('img/screen3.gif');
  screen4 = loadImage('img/screen4.gif');
  font = loadFont("font/Anton-Regular.ttf");
}

function draw() {
  background(bg);

  // Draw semi-transparent black overlay
  fill(0, darknessLevel); // Black color with variable transparency
  rect(0, 0, width, height);

  textFont(font);

  // Display different screens based on the currentScreen variable
  if (currentScreen === 1) {
    image(screen1, 100, 110);
    textAlign(CENTER, CENTER);
    textSize(28);
    stroke("black");
    strokeWeight(2);
    fill("rgb(255,255,255)");
    text("LADIES AND GENTLEMEN.", 275, 210);
  } else if (currentScreen === 2) {
    image(screen2, 100, 110);
    textAlign(CENTER, CENTER);
    textSize(28);
    stroke("black");
    strokeWeight(2);
    fill("rgb(255,255,255)");
    text("THE FUTURE IS HERE,", 275, 210);
  } else if (currentScreen === 3) {
    image(screen3, 100, 110);
    textAlign(CENTER, CENTER);
    textSize(28);
    stroke("black");
    strokeWeight(2);
    fill("rgb(255,255,255)");
    text("AND IT'S ABOUT A HUNDRED\nFEET ABOVE THE ARBY'S.", 275, 210);
  } else if (currentScreen === 4) {
    image(screen4, 100, 110);
  }

  image(tv, 90, 100); // Draw the TV frame after the screens

  push();
  translate(452 + button1.width / 2, 127 + button1.height / 2);
  rotate(radians(button1Rotation));
  image(button1, -button1.width / 2, -button1.height / 2);
  pop();
  push();
  translate(452 + button2.width / 2, 184 + button2.height / 2);
  rotate(radians(button2Rotation));
  image(button2, -button2.width / 2, -button2.height / 2);
  pop();

  // Check if mouse is over button1
  var d1 = dist(mouseX, mouseY, 452 + button1.width / 2, 127 + button1.height / 2);
  // Check if mouse is over button2
  var d2 = dist(mouseX, mouseY, 452 + button2.width / 2, 184 + button2.height / 2);
  
  // Set cursor to HAND if mouse is over either button
  if (d1 < button1.width / 2 || d2 < button2.width / 2) {
    cursor(HAND);
  } else if (currentScreen === 4 && mouseX > 100 && mouseX < 100 + screen4.width &&
      mouseY > 110 && mouseY < 110 + screen4.height) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

function mousePressed() {
  // Check if button1 is clicked
  var d1 = dist(mouseX, mouseY, 452 + button1.width / 2, 127 + button1.height / 2);
  if (d1 < button1.width / 2) {
    button1Rotation += 45; // Rotate 90 degrees
    button1Rotation %= 360; // Keep the rotation within 360 degrees
    // Change the screen when button1 is clicked
    currentScreen = (currentScreen % 4) + 1; // Loop through screens 1 to 4
    // Increase darkness level
    darknessLevel += 20;
    darknessLevel = constrain(darknessLevel, 0, 100); // Keep darkness level between 0 and 100
  }

  // Check if button2 is clicked
  var d2 = dist(mouseX, mouseY, 452 + button2.width / 2, 184 + button2.height / 2);
  if (d2 < button2.width / 2) {
    button2Rotation += 45; // Rotate 90 degrees
    button2Rotation %= 360; // Keep the rotation within 360 degrees
    // Change the screen when button2 is clicked
    currentScreen = (currentScreen % 4) + 1; // Loop through screens 1 to 4
    // Increase darkness level
    darknessLevel += 10;
    darknessLevel = constrain(darknessLevel, 0, 100); // Keep darkness level between 0 and 100
  }

  // Check if mouse is clicked on the last screen (screen4)
  if (currentScreen === 4 && mouseX > 100 && mouseX < 100 + screen4.width &&
      mouseY > 110 && mouseY < 110 + screen4.height) {
    // Redirect to a different webpage
    window.location.href = "index.html"; // Replace "https://example.com" with your desired webpage URL
  }
}
