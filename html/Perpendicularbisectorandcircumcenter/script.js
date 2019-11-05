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

var mAB = new Point(new Vector2d(0,0), 10, "yellow", "mAB");
var mBC = new Point(new Vector2d(0,0), 10, "yellow", "mBC");
var mCA = new Point(new Vector2d(0,0), 10, "yellow", "mCA");

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
    AA.intercept = mBC.position.dy - AA.slope * mBC.position.dx;
  AA.draw(context);
  BB.slope = -1/CA.slope;
    BB.intercept = mCA.position.dy - BB.slope * mCA.position.dx;
  BB.draw(context);
  CC.slope = -1/AB.slope;
    CC.intercept = mAB.position.dy - CC.slope * mAB.position.dx;
  CC.draw(context);

  mAB.position.dx = (A.position.dx + B.position.dx)/2;
  mAB.position.dy = (A.position.dy + B.position.dy)/2;

  mBC.position.dx = (B.position.dx + C.position.dx)/2;
  mBC.position.dy = (B.position.dy + C.position.dy)/2;

  mCA.position.dx = (C.position.dx + A.position.dx)/2;
  mCA.position.dy = (C.position.dy + A.position.dy)/2;

  context.beginPath();
  context.strokeStyle = "blue";
  context.fillStyle = this.color;
  context.arc(S.position.dx,S.position.dy,getLength(A, S),0,2*Math.PI);
  context.stroke();

  context.closePath();

  }

  A.draw(context);
  B.draw(context);
  C.draw(context);
  S.draw(context);

  mAB.draw(context);
  mBC.draw(context);
  mCA.draw(context);





animate();

function getLength(a, b){
  return Math.sqrt(Math.pow(b.position.dy - a.position.dy, 2) +
                   Math.pow(b.position.dx - a.position.dx, 2));
}
