const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let dots = [];

for (var i = 0; i <4; i++) {
  addPoint();
}

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(animate);
  if(Math.random()<0.01){
     dots.splice(0,1)
     addPoint();

   }
  context.fillStyle = "rgba(255,255,0,0.2)"
  context.beginPath();
  context.moveTo(dots[0].position.dx,dots[0].position.dy);
  for (var i = 0; i < dots.length; i++) {
    context.lineWidth = 2;
    context.lineTo(dots[i].position.dx,dots[i].position.dy);
  }
  context.closePath();
  context.fill();
  context.stroke();
  for (var i = 0; i < dots.length; i++) {
    dots[i].draw(context);

  }
}

animate();

function randomNumber(max){
  return Math.random()*max;
}

function addPoint(){
  let dot = new Point(new Vector2d(randomNumber(canvas.width),randomNumber(canvas.height)),30,"yellow");
  dots.push(dot);
}
