var x = []
var y = []
var yspd = []
var xspd = []
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function start() {
    for (let i = 0; i < 100; i = i + 1) {
        x[i] = Math.floor(Math.random() * 1000)
        y[i] = Math.floor(Math.random() * 800)
        xspd[i] = (Math.floor(Math.random() * 20) - 10)
        yspd[i] = (Math.floor(Math.random() * 20) - 10)
    }
}
function move() {
    ctx.clearRect(0, 0, 1000, 1000)
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,1000,1000)
    for (let i = 0; i < 100; i = i + 1) {
        x[i] = x[i] + xspd[i]
        y[i] = y[i] + yspd[i]
        ctx.beginPath();
        ctx.arc(x[i], y[i], 5, 0, 2 * Math.PI);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.stroke();
        if (x[i] > 1000) {
            xspd[i] = xspd[i] * -1
        }
        if (x[i] < 0) {
            xspd[i] = xspd[i] * -1
        }
        if (y[i] < 0) {
            yspd[i] = yspd[i] * -1
        }
        if (y[i] > 1000) {
            yspd[i] = yspd[i] * -1
        }
    }
}
setInterval(move, 10)
start()