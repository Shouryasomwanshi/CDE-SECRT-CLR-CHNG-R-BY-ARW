
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
if (keyIsDown(DOWN_ARROW))
{
  background('yellow')
}
if (keyIsDown(UP_ARROW))
{
  background('orange')
}
if (keyIsDown(RIGHT_ARROW))
{
  background('blue')
}
if (keyIsDown(LEFT_ARROW))
{
  background('pink')
}
console.log("use yhe up,down,right,left arrow to make background cloure change ")
}




