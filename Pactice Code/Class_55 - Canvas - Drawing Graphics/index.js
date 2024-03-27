
// Canvas
// find canvas element
var can_c = document.getElementById("my_canvas");
var ccc = can_c.getContext("2d");

// border
ccc.strokeStyle = "black";
ccc.lineWidth = 3;
ccc.strokeRect(10, 10, 380, 280);

// square
ccc.rect(10, 10, 380, 280);
ccc.fillStyle = "green";
ccc.fill();

//  circle
var canvasX = can_c.width / 2;
var canvasY = can_c.height / 2;

ccc.beginPath();
ccc.arc(canvasX, canvasY,80, 0, 2 * Math.PI, false);
ccc.fillStyle = "red";
ccc.fill();
ccc.lineWidth = 2;
ccc.stroke();