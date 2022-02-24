canvas = document.getElementById("myCanvas");
ctx  = canvas.getContext("2d");
colour = "red";
widthofpen = 2;
mouseevents = "empty";
 var lastposx;
 var lastposy;
width = screen.width;
newwidth = width - 70;
newheight = screen.height - 300;
console.log(newwidth, newheight);
if(width<992)
{
document.getElementById("myCanvas").width = newwidth;
document.getElementById("myCanvas").height = newheight;
document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", mytouchstart);
function mytouchstart(e)
{
console.log("mytouchstart is working");
colour = document.getElementById("color").value;
widthofpen = document.getElementById("width").value;
lastposx = e.touches[0].clientX-canvas.offsetLeft;
lastposy = e.touches[0].clientY-canvas.offsetTop;
console.log(lastposx, lastposy);
}
canvas.addEventListener("touchmove", mytouchmove);
function mytouchmove(e)
{
    console.log("mytouchmove is starting...");
    curposx = e.touches[0].clientX-canvas.offsetLeft;
    curposy = e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = widthofpen;
ctx.moveTo(lastposx , lastposy);
ctx.lineTo(curposx , curposy);
ctx.stroke()
lastposx = curposx;
lastposy = curposy;

}

function ClearArea()
{
ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}