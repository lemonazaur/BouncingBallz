var globalGravity = 9.8;
var bounceSound = document.getElementById('bounceSound');
var Ball = /** @class */ (function () {
    function Ball(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 20 + 15; // Random radius between 15 and 35
        this.color = this.getRandomColor();
        this.velocityY = 0;
        this.gravity = globalGravity;
        this.damping = 0.8;
        this.isBouncing = true; // Initially, the ball is bouncing
        this.canPlaySound = true; // Allows the sound to play initially
    }
    Ball.prototype.setGravity = function (num) {
        this.gravity = num;
    };
    Ball.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    Ball.prototype.update = function (deltaTime) {
        if (this.isBouncing) {
            this.velocityY += this.gravity;
            this.y += this.velocityY * deltaTime;
            // Check for collision with the bottom of the canvas
            if (this.y + this.radius > canvas.height) {
                this.y = canvas.height - this.radius;
                this.velocityY *= -this.damping;
                // Only play the sound if the ball is still bouncing and can play sound
                if (Math.abs(this.velocityY) > 0.1) {
                    if (this.canPlaySound) {
                        bounceSound.currentTime = 0;
                        bounceSound.play();
                        this.canPlaySound = false;
                    }
                }
                else {
                    this.velocityY = 0;
                    this.isBouncing = false; // Ball has stopped bouncing
                }
            }
            else {
                this.canPlaySound = true; // Reset sound play permission
            }
        }
    };
    Ball.prototype.draw = function (context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    };
    return Ball;
}());
var canvas = document.getElementById('gameCanvas');
var context = canvas.getContext('2d');
function resizeCanvas() {
    var buttonHeight = document.querySelector('div').offsetHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - buttonHeight;
}
resizeCanvas();
var balls = [];
var lastTime = 0;
window.addEventListener('resize', resizeCanvas);
canvas.addEventListener('click', function (event) {
    if (balls.length >= 15) {
        console.log("ERROR: max 15 balls on screen");
    }
    else {
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        balls.push(new Ball(x, y));
    }
});
function tick(currentTime) {
    var deltaTime = (currentTime - lastTime) / 1000;
    context.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(function (ball) {
        ball.update(deltaTime);
        ball.draw(context);
    });
    lastTime = currentTime;
    requestAnimationFrame(tick);
}
function setAllGrav(num) {
    globalGravity = num;
    balls.forEach(function (ball) {
        ball.setGravity(num);
    });
}
requestAnimationFrame(tick);
