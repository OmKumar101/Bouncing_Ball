var ball = document.getElementById("ball");
var x = 0;
var y = 0;
var xSpeed = 5;
var ySpeed = 5;
var body = document.querySelector("body");

function animate() {
  x += xSpeed;
  y += ySpeed;

  if (x + 50 > window.innerWidth || x < 0) {
    xSpeed = -xSpeed;
    body.style.backgroundColor = getRandomColor();
  }

  if (y + 50 > window.innerHeight || y < 0) {
    ySpeed = -ySpeed;
    body.style.backgroundColor = getRandomColor();
  }

  ball.style.left = x + "px";
  ball.style.top = y + "px";
  
  requestAnimationFrame(animate);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

animate();
