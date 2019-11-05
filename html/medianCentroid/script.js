const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//A,B,C balls
var A = new Point(new Vector2d(400, 600), 20, "blue", "A");
A.drag();
var B = new Point(new Vector2d(500, 500), 20, "yellow", "B");
B.drag();
var C = new Point(new Vector2d(700, 600), 20, "red", "C");
C.drag();
var S = new Point(new Vector2d(0,0), 10, "green", "S")

//median balls
var mAB = new Point(new Vector2d(0,0), 10, "yellow", "mAB");
var mBC = new Point(new Vector2d(0,0), 10, "yellow", "mBC");
var mCA = new Point(new Vector2d(0,0), 10, "yellow", "mCA");

//lines A/C
var AB = new LinearFunction(1,1);
var BC = new LinearFunction(1,1);
var CA = new LinearFunction(1,1);
//centroitlines
var AA = new LinearFunction(1,1);
var BB = new LinearFunction(1,1);
var CC = new LinearFunction(1,1);


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);


  S.position.dx = AA.interseption(BB).x;
  S.position.dy = AA.interseption(BB).y;



  mAB.position.dx = (A.position.dx + B.position.dx)/2;
  mAB.position.dy = (A.position.dy + B.position.dy)/2;

  mBC.position.dx = (B.position.dx + C.position.dx)/2;
  mBC.position.dy = (B.position.dy + C.position.dy)/2;

  mCA.position.dx = (C.position.dx + A.position.dx)/2;
  mCA.position.dy = (C.position.dy + A.position.dy)/2;

  AB.defineLineByTwoPoints(A,B);
  AB.draw(context);
  BC.defineLineByTwoPoints(B,C);
  BC.draw(context);
  CA.defineLineByTwoPoints(C,A);
  CA.draw(context);

  context.beginPath();
  context.strokeStyle = "purple";
  AA.defineLineByTwoPoints(A,mBC);
  AA.draw(context);
  BB.defineLineByTwoPoints(B,mCA);
  BB.draw(context);
  CC.defineLineByTwoPoints(C,mAB);
  CC.draw(context);



  mAB.draw(context);
  mBC.draw(context);
  mCA.draw(context);


  A.draw(context);
  B.draw(context);
  C.draw(context);
  S.draw(context);
}

animate();
