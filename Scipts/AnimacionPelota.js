var x, y, dx, dy,ballRadius;
var ctx;
document.addEventListener('DOMContentLoaded', function() {
    const canvas2 = document.getElementById("canvas2");
    if (canvas2) {
        ctx = canvas2.getContext("2d");

        x = canvas2.width / 2;
        y = canvas2.height / 2;
        dx = 1.2;
        dy = -2;
        ballRadius = 10;
    }
  });


document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(event) {
    var relativeX = event.clientX - canvas2.offsetLeft;
    var relativeY = event.clientY - canvas2.offsetTop;
    if (Math.abs(x - relativeX) < 50 && Math.abs(y - relativeY) < 50) {
        dy = -dy;
    }
}

function drawBall(color) {
    
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
var color="red";
function draw() {
    if(ctx!=null){
        ctx.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas2.width, canvas2.height);
        drawBall(color);

        if (x + dx > canvas2.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
            if(color=="red"){
                color="blue";
            }else{
                color="red";
            }
        }
        if (y + dy > canvas2.height - ballRadius || y + dy < ballRadius) {
            dy = -dy;
            if(color=="red"){
                color="blue";
            }else{
                color="red";
            }
        }

        x += dx;
        y += dy;
    }
    
}

setInterval(draw, 10);