const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;



let A = new Point(new Vector2d(200,200),20,"blue");
A.drag();

let B = new Point(new Vector2d(500,400),20,"yellow");
B.drag();

let C = new Point(new Vector2d(100,250),20,"green");
C.drag();

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  context.beginPath();
  context.moveTo(A.position.dx, A.position.dy);
  context.lineTo(B.position.dx, B.position.dy);
  context.lineTo(C.position.dx, C.position.dy);
  context.closePath();
  context.stroke();
  context.fill();

  A.draw(context);
  B.draw(context);
  C.draw(context);
}

animate();
