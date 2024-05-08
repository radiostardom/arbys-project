var phone;
var bg;
var hand;
var font;
var phoneX = -20; // Initial x-coordinate of the phone
var phoneY = 50;   // Initial y-coordinate of the phone
var shaking = false;
var shakeTimer = 0;
var shakeDuration = 30; // Adjust the duration of the shake
var messages = ["...",
  "WE KNOW THE DIFFERENCE.",
  "WE'VE CAUGHT ONTO THEIR GAME.",
  "WE UNDERSTAND THE LIGHTS-ABOVE-ARBY'S GAME."
];
var displayedMessages = [];

function setup() {
  createCanvas(650, 700);
  phone = loadImage('img/phone.png');
  hand = loadImage('img/hand.png');
  font = loadFont('font/CuteFont-Regular.ttf');
  bg = loadImage('img/bgtable.jpeg');
}

function draw() {
  background(bg);
  textFont(font);
  
  if(mouseY < 300){
    cursor(ARROW);
  } else {
    cursor(HAND);
  }

  // If shaking is true, apply a random displacement to the phone
  if (shaking) {
    var shakeAmount = 10; // Adjust the intensity of the shake
    phoneX = -20 + random(-shakeAmount, shakeAmount);
    phoneY = 50 + random(-shakeAmount, shakeAmount);
    shakeTimer++;
    if (shakeTimer >= shakeDuration) {
      shaking = false;
      shakeTimer = 0;
    }
  }
  
  // Display the phone image
  image(phone, phoneX, phoneY);
  
  // Display the hand image
  image(hand, mouseX-600, mouseY-100);
  
  // Display the messages at the top of the screen
  textAlign(CENTER);
  fill(255);
  textSize(35);
  for (var i = 0; i < displayedMessages.length; i++) {
    text(displayedMessages[i], 312.5, 40 + i * 25);
  }

  if (displayedMessages.length === messages.length) {
    setTimeout(function() {
      window.location.href = 'page3.html';
    }, 5000); 
  }
}

function mouseClicked() {
  // Check if the mouse click is within the phone's area
  if (mouseX > phoneX && mouseX < phoneX + phone.width && mouseY > phoneY && mouseY < phoneY + phone.height) {
    if (displayedMessages.length < messages.length) {
      displayedMessages.push(messages[displayedMessages.length]);
    }
    shaking = true; // Start the shaking effect when the phone is clicked
  }
}
