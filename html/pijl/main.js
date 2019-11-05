const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let arrow = new Arrow(new Vector2d(context.canvas.width/2, context.canvas.height/2), 0, 3, 255, 10, 10);
let mouse = new Vector2d(10, 10);

function Update() {
    requestAnimationFrame(Update);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    arrow.angle = Math.atan2((mouse.dy - arrow.pos.dy), ( mouse.dx - arrow.pos.dx));
    arrow.draw(context);

    context.beginPath()
    dottedLine(context, arrow.pos.dx, arrow.pos.dy, mouse.dx, arrow.pos.dy, 20, 20);
    dottedLine(context, arrow.pos.dx, arrow.pos.dy, arrow.pos.dx, mouse.dy, 20, 20);
    context.moveTo(mouse.dx, mouse.dy);
    context.lineTo(mouse.dx, arrow.pos.dy);
    context.moveTo(mouse.dx, mouse.dy);
    context.lineTo(arrow.pos.dx, mouse.dy);
    context.moveTo(mouse.dx, mouse.dy);
    context.lineTo(arrow.pos.dx, arrow.pos.dy);
    context.stroke();
    context.closePath()
}

Update()

window.addEventListener("mousemove", (e)=>{
    mouse.dx = e.clientX;
    mouse.dy = e.clientY;
});

function dottedLine(context, x_start, y_start, x_end, y_end, dash, spaces) {
    context.setLineDash([dash, spaces]);
    context.beginPath();
    context.moveTo(x_start, y_start);
    context.lineTo(x_end, y_end);
    context.stroke();
    context.closePath();
}
