const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//A,B,C balls
var A = new Point(new Vector2d(400, 600), 20, "yellow", "A");
A.drag();
var B = new Point(new Vector2d(500, 500), 20, "yellow", "B");
B.drag();
var C = new Point(new Vector2d(700, 600), 20, "yellow", "C");
C.drag();
var S = new Point(new Vector2d(0, 0), 10, "green", "S")

//lines A/C
var AB = new LinearFunction(1, 1);
var BC = new LinearFunction(1, 1);
var CA = new LinearFunction(1, 1);
//hoogtelijnen
var AA = new LinearFunction(1, 1);
var BB = new LinearFunction(1, 1);
var CC = new LinearFunction(1, 1);

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);

  S.position.dx = AA.interseption(BB).x;
  S.position.dy = AA.interseption(BB).y;

  AB.defineLineByTwoPoints(A, B);
  AB.draw(context);
  BC.defineLineByTwoPoints(B, C);
  BC.draw(context);
  CA.defineLineByTwoPoints(C, A);
  CA.draw(context);

  context.strokeStyle = "green";
  AA.slope = -1/BC.slope;
    AA.intercept = A.position.dy - AA.slope * A.position.dx;
  AA.draw(context);
  BB.slope = -1/CA.slope;
    BB.intercept = B.position.dy - BB.slope * B.position.dx;
  BB.draw(context);
  CC.slope = -1/AB.slope;
    CC.intercept = C.position.dy - CC.slope * C.position.dx;
  CC.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);
  S.draw(context);
}

animate();
